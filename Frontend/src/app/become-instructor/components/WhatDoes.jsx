import Image from "next/image";
import React from "react";

const WhatDoes = ({data}) => {
  const listItem = [
    "A commitment to Developing and Delivering Best-in-Class training to a global audience.",
  ];

  let {Title, points, Image: img} = data

  return (
    <div className="w-full my-10 py-8">
      <div className="w-[80%] mx-auto ">
        <h1 className="w-full mb-8 font-semibold uppercase text-3xl text-[#0466C1]">
          {Title}
        </h1>
        <div className=" flex gap-3 justify-between">
          <div className="w-[60%] pl-3">
            <ul className="list-disc marker:text-[#1768E1] marker:text-3xl">
              {points.map((item, index) => (
                <li key={item._id || index} className="text-xl my-3">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[40%]">
            <Image
              src={img}
              alt="Image 1"
              width={350}
              height={200}
              className="w-[80%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDoes;
