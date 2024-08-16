'use client'
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

// Define the type for weather data
interface WeatherData {
    country: string;
    city: string;
    temp: number; // Temperature in Celsius
    humidity: number;
    wind: number;
    gust: number;
    visibility: number;
    condition: string;
    img: string;
}

function Landing() {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState<WeatherData | null>(null);

    const getWeather = async () => {
        const api_key = '0703f3a256c14a9aa0b135610241608';
        const api_url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`;
        if (location) {
            try {
                const res = await fetch(api_url);
                const data = await res.json();
                if (data) {
                    const fahrenheit = data.current.temp_f;
                    const celsius = (fahrenheit - 32) * 5 / 9; // Convert to Celsius
                    
                    const api_data: WeatherData = {
                        country: data.location.country,
                        city: data.location.name,
                        temp: celsius,
                        humidity: data.current.humidity,
                        wind: data.current.wind_mph,
                        gust: data.current.gust_mph,
                        visibility: data.current.vis_miles,
                        condition: data.current.condition.text,
                        img: data.current.condition.icon
                    };
                    setWeather(api_data); // Set the weather data
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="relative flex items-center justify-center h-screen">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6 max-w-md w-full">
                <div className="flex">
                    <input
                        type="text"
                        className="text-white rounded-l-lg py-2 px-4 focus:outline-none bg-slate-300 w-full"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Search Area"
                    />
                    <button onClick={getWeather} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-r-lg">
                        <FaSearch className="size-5" />
                    </button>
                </div>
                {weather && (
                    <div className="mt-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6 max-w-md w-full text-black">
                        <div className="text-center text-2xl font-serif mt-2">
                            {weather.city}, {weather.country}
                        </div>
                        <div>
                            <h1 className="text-center text-5xl">
                                {weather.temp.toFixed(1)} °C
                            </h1>
                        </div>
                        <div className="flex justify-center mt-4">
                            <img src={weather.img} width={80} height={80} alt="condition" />
                        </div>
                        <div className="text-center mt-2 text-xl">
                            {weather.condition}
                        </div>
                        <div className="mt-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4">
                            <div className="text-center text-xl font-bold mb-2">
                                Condition Details
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="font-medium">Humidity:</span>
                                <span>{weather.humidity}%</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="font-medium">Wind:</span>
                                <span>{weather.wind} mph</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="font-medium">Visibility:</span>
                                <span>{weather.visibility} miles</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Gust:</span>
                                <span>{weather.gust} mph</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Landing;
