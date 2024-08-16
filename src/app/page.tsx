import Image from "next/image";
import Navbar from "../components/Navbar"

// https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=dee7939025fdca0f23a26dd8c0c6319d
export default function Home() {
  return (
      <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      </div>
  );
}
