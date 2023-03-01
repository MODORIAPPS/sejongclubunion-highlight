import { useState } from "react";

type MapType = "지하 2층" | "5층" | "6층"
const MapView: React.FC = () => {

  const [location, setLocation] = useState<MapType>("지하 2층");

  const getImage = (): string => {
    switch (location) {
      case "지하 2층": return "/images/b2_floor.png";
      case "5층": return "/images/5_floor.png";
      case "6층": return "/images/6_floor.png";
      default: return "/images/b2_floor.png";
    }
  };

  const Button: React.FC<{ map: MapType }> = ({ map }) => {
    return (
      <div style={{ background: location === map ? "#F1CB23" : "#E1E1E1" }} onClick={() => setLocation(map)} className='ml-3 py-[2px] px-2 rounded'>
        <span className='text-xs text-gray-700'>{map}</span>
      </div>
    );
  };

  return (
    <div className='p-5 my-4 rounded-lg bg-[#F8F8F8]'>
      <h2 className="text-gray-700 font-bold text-2xl">
        🗺️ <br />
        동아리실 배치도
      </h2>
      <p className="text-gray-500 my-4">
        중앙동아리는 모두 학생회관에 있어요
      </p>
      <img
        className='w-full h-[150px]'
        src={getImage()} />
      <div className='mt-4 flex flex-row-reverse '>
        <Button map={"6층"} />
        <Button map={"5층"} />
        <Button map={"지하 2층"} />
      </div>
    </div>
  );
};

export default MapView;