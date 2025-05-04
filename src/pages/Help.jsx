import { useState } from "react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { RiUserVoiceFill } from "react-icons/ri";
import { CgVoicemail } from "react-icons/cg";

const Help = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div className="flex flex-col items-center gap-4 px-6 py-4 rounded-md  h-150 w-[90%] md:w-[40%] mx-auto mt-12 text-black shadow-lg bg-white">
      <div className="w-full text-center bg-green-300 py-4 rounded-md">
        <h1 className="text-xl font-bold">Emergency Call Button</h1>
      </div>

      <div className="flex flex-col items-center gap-2 bg-green-300 w-full py-4 rounded-md">
        <button
          onClick={handleClick}
          className="rounded-full bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 text-lg font-semibold shadow-md"
        >
          {buttonClicked ? "Listening..." : "Push Button"}
        </button>
        <div className="text-2xl">
          {buttonClicked ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
        </div>
        <p className="text-sm">Press the button to call for help</p>
      </div>

      <div className="flex flex-col items-center gap-2 bg-green-300 w-full py-4 rounded-md">
        {buttonClicked ? (
          <RiUserVoiceFill className="text-3xl text-green-600" />
        ) : (
          <CgVoicemail className="text-3xl text-red-500" />
        )}
        <p className="text-sm">Emergency services are on their way</p>
      </div>
      <div className="bg-yellow-300 flex items-center justify-center h-58 w-full py-4 px-2 text-center rounded-md">
  <p className="text-sm md:text-base font-medium">
  &apos;If you&apos;re feeling unwell, please seek assistance from the station staff immediately.&apos;
  </p>
</div>
    </div>
  );
};

export default Help;
