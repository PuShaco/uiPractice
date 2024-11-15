import mockIcon from "@/assets/icons/1000d.svg";
import { WeatherInfo } from "@/types/types";


function formatDate(epoch: number) {
  const date = new Date(epoch * 1000); // Convert seconds to milliseconds
  const day = date.toLocaleString("en-EN", { day: "2-digit" }); // Get the day
  const month = date.toLocaleString("en-EN", { month: "short" }); // Get the month (abbreviated)

  return `${day} ${month}`; // Return formatted string
}

function formatDay(epoch: number) {
  const date = new Date(epoch * 1000); // Convert seconds to milliseconds
  const weekday = date.toLocaleString("ko-KR", { weekday: "long" }); // Get the day of the week

  return weekday;
}

type Props = {
  item : WeatherInfo
}

export default function GetDay({item} : Props) {
  return (
    <div
    className="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-md"
    key={item.date}
  >
    <div className="w-fit h-10 flex items-center gap-2">
      {item.isDay ? (
        <img
          src={`src/assets/icons/${item.iconCode}d.svg`}
          alt=""
          className="h-7 w-7"
        />
      ) : (
        <img
          src={`src/assets/icons/${item.iconCode}n.svg`}
          alt=""
          className="h-7 w-7"
        />
      )}
      <div className="flex items-center gap-1 w-20">
        <div className="w-full h-full flex items-start gap-[2px]">
          <span className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600">
            {item.maxTemp}
          </span>
          <span className="text-xs font-normal mt-[3px]">
            &#8451;
          </span>
        </div>
        <div className="w-full h-full flex items-start gap-[2px]">
          <span className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600">
            {item.minTemp}
          </span>
          <span className="text-xs font-normal mt-[3px]">
            &#8451;
          </span>
        </div>
      </div>
    </div>
    <div className="flex-1 flex items-center justify-end gap-5 mb-1">
      <small className="text-sm leading-none">
        {formatDate(Number(item.date))}
      </small>
      <small className="text-sm leading-none">
        {formatDay(Number(item.date))}
      </small>
    </div>
  </div>
  );
}
