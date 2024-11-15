import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";

import { hourlyData } from "@/types/types";
import { useLoaderData } from "react-router-dom";
import HourCard from "./HourCard";
import { useAtomValue } from "jotai";
import { weatherData } from "./loader";

function FormattedTime(time: string) {
  const [date, hourString] = time.split(" ");
  const [hour, minute] = hourString.split(":").map(Number);

  let formattedTime;
  if (hour === 0) {
    formattedTime = "오전 0시"; // 오전 0시
  } else if (hour === 12) {
    formattedTime = "낮 12시"; // 낮 12시
  } else {
    const isAM = hour < 12; // 오전인지 확인
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // 12시간 형식으로 변환
    const period = isAM ? "오전" : "오후"; // 오전/오후 구분
    formattedTime = `${period} ${formattedHour}시`;
  }

  return formattedTime;
}

export default function GetHourlyCard() {
  // const { weatherData: data } = useLoaderData() as {
  //   weatherData: Weather;
  // };

  const { weatherData: data} = useAtomValue(weatherData);

  return (
    <Card className="flex-1 min-w-[50%-12px] rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl">Hourly</CardTitle>
        <CardDescription>
          오늘의 시간대별 날씨를 조회하고 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center gap-4 overflow-x-scroll">
        {data.forecast.forecastday[0].hour.map((item: hourlyData) => {
          const formattedTime = FormattedTime(item.time);
          return (
            <HourCard item={item} formattedTime={formattedTime} key={item.time}/>
          );
        })}
      </CardContent>
    </Card>
  );
}
