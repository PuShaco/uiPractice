const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;


export const fetchApi = async (cityName: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast.json?q=${cityName}&days=7&key=${API_KEY}`
      );
  
      if (!response.ok) {
        throw new Error("Weather api fetching failed");
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
 export const fetchTideApi = async (cityName: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/marine.json?q=${cityName}&days=1&key=${API_KEY}`
      );
  
      if (!response.ok) {
        throw new Error("Tide api fethcing failed");
      }
  
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
 export const getOneWeekWeather = async (cityName: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast.json?q=${cityName}&days=7&key=${API_KEY}`
      );
  
      if (!response.ok) {
        throw new Error("OneWeek api fetching failed");
      }
  
      const data = await response.json();
      const newData = data.forecast.forecastday.map((item: ForecastDay) => {
        return {
          maxTemp: Math.round(item.day.maxtemp_c),
          minTemp: Math.round(item.day.mintemp_c),
          date: item.date_epoch,
          iconCode: item.day.condition.code,
          isDay: item.day.condition.icon.includes("day"),
        };
      });
      return newData;
    } catch (error) {
      console.log(error);
    }
  };
  