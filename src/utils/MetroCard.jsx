const MetroCard = ({ Metro }) => {
    return (
      <div className="flex flex-row justify-between gap-4 w-full">
        {Metro.map((line) => (
          <div
            key={line.id}
            className={`flex flex-col justify-center items-center gap-4 px-6 py-4 rounded-sm font-bold w-1/3 text-black bg-${line.color}-500`}
          >
            <img src={line.img} alt={line.name} className="w-full h-auto rounded-lg" />
            <h2 className="text-xl">{line.name}</h2>
          </div>
        ))}
      </div>
    );
  };
  
  export default MetroCard;
  