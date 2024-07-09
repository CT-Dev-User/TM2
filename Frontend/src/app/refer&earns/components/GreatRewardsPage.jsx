import Image from "next/image";

const GreatRewardsPage = ({ rewardData }) => {
  let highLights_1 = [
    "Program Highlights ",
    "Program Highlights ",
    "Program Highlights ",
    "Program Highlights ",
  ];

  let highLights_2 = [
    "Program Highlights ",
    "Program Highlights ",
    "Program Highlights ",
    "Program Highlights ",
  ];

  let { title, subTitle, desc, image, programHighlights } = rewardData || {};

  return (
    <>
      <section className="w-[100%] my-10 p-3">
        <div className="w-[80%] mx-auto flex justify-between gap-14">
          {/* Content section */}
          <div className="w-1/2 ">
            <h1
              className="text-[#0466C1] text-3xl uppercase font-bold tracking-wide
              "
            >
              {title}
            </h1>
            <h2 className="font-bold text-md my-4 ">{subTitle}</h2>
            <p className="text-left my-4">{desc}</p>
            <h2 className="uppercase font-semibold text-lg text-[#0466C1] mt-2">
              Program Highlights
            </h2>

            {/* List items */}
            <div className="w-full grid grid-cols-1 mb-10 mx-10">
              <ul>
                {programHighlights.map((hl, index) => {
                  return (
                    <li
                      key={index}
                      className="list-disc marker:text-blue-400 marker:text-[30px]"
                    >
                      {hl.point}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Button */}
            <button className="bg-white max-h-10 p-4 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span>Login to Refer</span>
              <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                ›
              </span>
            </button>
          </div>

          {/* Image section */}
          <div className="w-1/2 h-[400px]">
            <Image
              width={300}
              height={300}
              style={{ width: "auto", height: "auto" }}
              src={image}
              alt="refer&earnimg"
              className=" h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GreatRewardsPage;
