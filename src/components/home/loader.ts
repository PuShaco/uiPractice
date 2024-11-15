import {
  ForecastDay,
  ForecastTideDay,
  Weather,
  WeatherInfo,
} from "@/types/types";
import { atom } from "jotai";
import { cityNameAtom, serverStateAtom, mainStore } from "../stores";

import {fetchApi, fetchTideApi, getOneWeekWeather} from '@/api/api'


export const weatherData = atom<
  Promise<{
    weatherData: Weather;
    tideData: any;
    weeklyWeatherSummary: WeatherInfo[];
  }>
>(async () => {
  const cityName = mainStore.get(cityNameAtom);
  console.log("checking for call times")
  try {;
    const [weatherData, tideData, weeklyWeatherSummary] = await Promise.all([
      fetchApi(cityName),
      fetchTideApi(cityName),
      getOneWeekWeather(cityName),
    ]);

    setTimeout(() => {}, 2000); //스켈레톤을 보기 위한 timeout

    return { weatherData, tideData, weeklyWeatherSummary };
  } catch (error) {
    throw new Response("Failed to load data", { status: 500 });
  }
});

//react-router-dom의 loader기능을 사용할 경우에 사용할 api 
export async function loader(): Promise<{
  weatherData: Weather;
  tideData: ForecastTideDay;
  weeklyWeatherSummary: WeatherInfo[];
}> {
  const cityName = mainStore.get(cityNameAtom);;

  setTimeout(() => {
    mainStore.set(serverStateAtom, "loading");
  }, 0);
  console.log(
    "after set serverStateAtom idle to loading : ",
    mainStore.get(serverStateAtom)
  );

  try {
    const [weatherData, tideData, weeklyWeatherSummary] = await Promise.all([
      fetchApi(cityName),
      fetchTideApi(cityName),
      getOneWeekWeather(cityName),
    ]);

    setTimeout(() => {}, 1000);

    setTimeout(() => {
      mainStore.set(serverStateAtom, "idle");
    }, 0);
    console.log(
      "after set serverStateAtom loading to idle : ",
      mainStore.get(serverStateAtom)
    );
    return { weatherData, tideData, weeklyWeatherSummary };
  } catch (error) {
    throw new Response("Failed to load data", { status: 500 });
  }
}

