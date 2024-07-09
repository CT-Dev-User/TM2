import Image from "next/image";

const BecomeInstructor = ({instructorData}) => {
  let imgStyling = {
    objectFit: "cover",
    width: "200px",
    height: "auto",
  };
  let {desc, image1, image2, image3} = instructorData
  return (
    <div id="instructor" className="w-full my-10 py-6">
      <div className="w-[80%] mx-auto flex justify-between gap-10">
        {/* Content section */}
        <div className="w-1/2">
          <div className="">
            <h1 className="text-[#0466C1] uppercase font-semibold text-3xl my-4">
              Become a Instructor
            </h1>
            <p className="text-start text-md leading-7 my-6">
              {desc}
            </p>
          </div>
        </div>

        {/* Image section */}
        <div className="w-1/2">
          <div className="relative w-full h-full flex">
            <Image
              width={300}
              height={300}
              style={imgStyling}
              src={image1}
              alt="A man writing on a whiteboard"
              className="w-[200px] h-auto absolute "
            />
            <Image
              width={300}
              height={300}
              style={imgStyling}
              src={image2}
              alt="A man writing on a whiteboard"
              className="w-[200px] h-auto absolute top-[40px] left-[36%]"
            />
            <Image
              width={300}
              height={300}
              style={imgStyling}
              src={image3}
              alt="A man writing on a whiteboard"
              className="w-[200px] h-auto absolute top-[53%] left-[15%]"
            />

            {/* Small grid cubes */}
            <Image
              width={1}
              height={1}
              style={{ width: "28px", height: "28px" }}
              src="/colorfull-grid-cube.png"
              alt="cubeIcon"
              className="w-7 h-7 absolute left-[36%]"
            />
            <Image
              width={1}
              height={1}
              style={{ width: "28px", height: "28px" }}
              src="/colorfull-grid-cube.png"
              alt="cubeIcon"
              className="w-7 h-7 absolute left-0 top-[210px]"
            />
            <Image
              width={1}
              height={1}
              style={{ width: "28px", height: "28px" }}
              src="/colorfull-grid-cube.png"
              alt="cubeIcon"
              className="w-7 h-7 absolute top-[97%] left-[52%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
