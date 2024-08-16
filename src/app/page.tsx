import Image from "next/image";
import Navbar from "../components/Navbar";
import Landing from "@/components/Landing";

// https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=dee7939025fdca0f23a26dd8c0c6319d
export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover animate-background-animation z-0 overflow-hidden"
        autoPlay
        muted
        loop
      >
        <source src="/01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />
      <Landing />
    </div>
  );
}
