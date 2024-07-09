import Image from "next/image";

const FliexibleMentorship = () => {
  const headings = [
    "Have an Hour?",
    "Have a week?",
    "Have a mounth?",
    "Have a more Time?",
  ];
  return (
    <div id="mentorshipWay" className="w-full my-20 py-8">
      <div className="w-[80%] mx-auto">
        {/* main heading */}
        <h1 className=" text-3xl text-blue flex items-center justify-left  font-bold text-[#0466C1] uppercase mb-4">
          Fliexible Mentorship your way
        </h1>
        <div className="flex gap-3">
          <div className="w-[60%]">
            {/* components of questions */}
            <div className="mt-[3rem] flex gap-3">
              {headings.map((text, index) => (
                <div
                  key={index}
                  className="bg-[#4D49D6] text-white p-2 rounded-md text-md"
                >
                  {text}
                </div>
              ))}
            </div>
            {/* 2nd heading */}
            <div className="mt-20 w-[60%]">
              <h1 className="font-bold mb-4 text-[#0466C1] text-4xl">
                Build a Guide
              </h1>
              <p className="font-normal text-2xl">
                Curate your favorite content on popular topics & Questions
              </p>
            </div>
          </div>
          {/* Image of left side */}
          <div className="w-[40%] ">
            <Image
              src="/Mentorship-img.png"
              alt="Image 1"
              width={500}
              height={500}
              className="border-2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FliexibleMentorship;
