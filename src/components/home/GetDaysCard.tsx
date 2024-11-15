import { WeatherInfo } from "@/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import GetDay from "./GetDay";
import { useLoaderData } from "react-router-dom";
import { weatherData } from "./loader";
import { useAtomValue } from "jotai";

export default function GetDaysCard() {
  const { weeklyWeatherSummary: data} = useAtomValue(weatherData);
//  const {weeklyWeatherSummary : data} = useLoaderData() as {weeklyWeatherSummary: WeatherInfo[];}

  return (
    <Card className="w-1/4 min-w-[25%-12px] rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl">7 Days</CardTitle>
        <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        {data.map((item: WeatherInfo) => (
          <GetDay key={item.date} item={item} />
        ))}
      </CardContent>
    </Card>
  );
}
