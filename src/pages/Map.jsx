import { useState, useEffect } from "react";
import originalStations from "../utils/station";

const Map = () => {
  const [stationIndex, setStationIndex] = useState(0);
  const [stationList, setStationList] = useState(
    originalStations.map((station, idx) => ({
      ...station,
      status: idx === 0 ? "current" : "unvisited",
    }))
  );

  useEffect(() => {
    // Ensure stationIndex does not exceed the stationList length
    if (stationIndex >= stationList.length) return;

    const timer = setTimeout(() => {
      setStationList((prev) =>
        prev.map((station, idx) => {
          if (idx < stationIndex) return { ...station, status: "visited" }; 
          if (idx === stationIndex) return { ...station, status: "current" }; 
          if (idx === stationIndex + 1) return { ...station, status: "upcoming" }; 
          return { ...station, status: "unvisited" }; 
        })
      );
      setStationIndex((prev) => prev + 1); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [stationIndex]);

  return (
    <div className="relative flex justify-between items-center mt-50 w-[90%] mx-20 h-[300px] px-10 py-6 bg-white border border-gray-300 rounded-lg overflow-x-auto">
      {/* Base horizontal line */}
      <div className="absolute top-1/2 left-0 right-1 h-5 border border-gray-500 z-0" />

      {stationList.map((station, index) => (
        <div key={station.id} className="relative z-10 flex flex-col items-center flex-shrink-0 min-w-[80px]">
          {/* Station Circle */}
          <div className="relative">
            <div
              className={`w-4 h-4 mt-24 rounded-full z-10 ${
                station.status === "visited"
                  ? "bg-red-500"
                  : station.status === "current"
                  ? "bg-green-500"
                  : station.status === "upcoming"
                  ? "bg-orange-500" 
                  : "bg-black" 
              } ${station.isInterchange ? "border-2 border-black" : ""}`}
            ></div>
          </div>

          
          <span
            className={`text-[10px] text-center mb-15 w-24 transform origin-top-left ${
              index % 2 === 0 ? "rotate-45" : "-rotate-45"
            }`}
          >
            {station.name}
          </span>

          
          {station.branch && (
            <div
              className={`absolute w-10 h-1 ${station.branch.color} rotate-45 top-0 left-4`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Map;