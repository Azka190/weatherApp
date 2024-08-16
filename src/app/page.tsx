import Image from "next/image";
import Navbar from "../components/Navbar"

// https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=dee7939025fdca0f23a26dd8c0c6319d

interface WeatherData {
  coord: {
      lon: number;
      lat: number;
  };
  weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
  }>;
  base: string;
  main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
  };
  visibility: number;
  wind: {
      speed: number;
      deg: number;
  };
  clouds: {
      all: number;
  };
  dt: number;
  sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}


export default function Home() {
  return (
      <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      </div>
  );
}
