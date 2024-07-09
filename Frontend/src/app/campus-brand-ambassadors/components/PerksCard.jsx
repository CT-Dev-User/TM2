import Image from "next/image";
import "../style.css";
import { useMemo } from "react";

const PerksCard = ({
  id,
  title,
  points,
  color1,
  color2,
  colorWhite,
  image,
}) => {
  const bgGradColor = useMemo(() => {
    return {
      background: `linear-gradient(to right,${color1},${color2})`,
    };
  }, [color1, color2]);

  let circleStyle = {
    position: "absolute",
    top: "15px",
    right: "-17px",
    borderRadius: "50%",
    width: "220px",
    height: "220px",
    background: colorWhite
      ? `linear-gradient(${colorWhite}, ${colorWhite})`
      : `linear-gradient(${color1}, ${color2})`,
    zIndex: "1",
  };
  return (
    <div
      className={`relative ${
        id === 2 || id === 3 ? "col-span-1" : "col-span-2"
      } w-full h-[180px] rounded-lg  flex items-center justify-between z-0 overflow-hidden`}
      style={bgGradColor}
    >
        {/* Content Section */}
      <div className="w-[70%] z-[2] p-5">
        <h2 className="w-[65%] text-white text-2xl font-semibold">{title}</h2>
        <ul className="w-full text-white text-sm mt-2 ps-4">
          {points.map((item, index) => (
            <li key={index} className="list-disc ">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Icons */}
      <div className="absolute end-[40px] h-20 z-[2]">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          style={{ width: "120px", height: "120px" }}
        />
      </div>

    {/* Circle Div */}
      <div style={circleStyle}></div>
    </div>
  );
};

export default PerksCard;
