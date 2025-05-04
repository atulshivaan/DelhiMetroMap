import { useState } from "react";

const MetroCard = ({ Metro }) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  // Optional: map color strings to actual Tailwind classes
  const colorMap = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    // Add more as needed
  };

  return (
    <div className="flex  justify-center gap-6 w-full">
      {Metro.map((line) => (
        <div
          key={line.id}
          onClick={() => handleCardClick(line.id)}
          className={`cursor-pointer transition-all duration-300 transform hover:scale-105 flex flex-col items-center p-4 rounded-xl w-100 shadow-md ${
            colorMap[line.color] || "bg-gray-300"
          }`}
        >
          <img
            src={line.img}
            alt={line.name}
            className={`rounded-lg transition-all duration-500 ${
              activeCard === line.id ? "mb-4 -translate-y-2" : ""
            }`}
          />
          {activeCard === line.id && (
            <div className="text-center transition-opacity duration-500 opacity-100">
              <h2 className="text-xl mt-2">{line.name}</h2>
              <p className="text-sm">{line.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MetroCard;
