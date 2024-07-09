import Image from "next/image";

const Gallery = ({ galleryImages }) => {
  let imgData = [
    "gallery1",
    "gallery2",
    "gallery3",
    "gallery4",
    "gallery5",
    "gallery6",
    "gallery7",
    "gallery8",
    "gallery9",
  ];

  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  return (
    <div id="gallery" className="w-full my-8 py-6 bg-black text-white">
      <div className="w-[80%] mx-auto">
        {/* Heading section */}
        <div className="my-6">
          <h1 className="uppercase text-[#0466C1] text-3xl font-semibold my-3">
            Gallery
          </h1>
          <p className="text-start my-5 text-slate-400">
            With expertise in Digital, Engineering and Cloud, we deliver
            solutions that fulfill the traditional, transformational and future
            needs of clients across the globe.
          </p>
        </div>

        {/* Images section */}
        <div className="grid grid-cols-6 gap-4 p-4 my-10">
          {galleryImages.map((val, index) => {
            return (
              <div
                key={index}
                className={`relative ${
                  index === 0
                    ? "col-span-2 row-span-2"
                    : index === 1
                    ? "col-span-2"
                    : index === 4
                    ? "col-span-2"
                    : index === 7
                    ? "col-span-4"
                    : index === 8
                    ? "col-span-2"
                    : ""
                } `}
              >
                <Image
                  width={400}
                  height={200}
                  style={imgStyling}
                  src={val.image}
                  alt={val.event}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
