import { hourlyData } from "@/types/types";
import { Card } from "../ui/card";

type Props = {
    item : hourlyData,
    formattedTime : string
}


export default function HourCard({item, formattedTime} : Props) {
  return (
    <>
      <Card
        className="w-24 min-w-24 h-fit flex flex-col items-center py-[6px] gap-1 bg-neutral-50 rounded-lg"
        key={item.time}
      >
        <span className="text-sm">{formattedTime}</span>
        {item.condition.icon.includes("day") ? (
          <img
            src={`src/assets/icons/${item.condition.code}d.svg`}
            alt=""
            className="h-14 w-14"
          />
        ) : (
          <img
            src={`src/assets/icons/${item.condition.code}n.svg`}
            alt=""
            className="h-14 w-14"
          />
        )}
        <div className="w-full flex items-start justify-center">
          <span className="poppins-medium scroll-m-20 text-xl font-medium tracking-tight">
            {Math.round(item.temp_c)}
          </span>
          <span className="text-[13px] ml-[1px] mt-[1px] font-medium">
            &#8451;
          </span>
        </div>
      </Card>
    </>
  );
}
