const PastHiringProcess = () => {
  return (
    <div className="w-full mb-10 py-10 text-white">
      <div className="w-[80%] mx-auto ">
        {/* Heading section */}
        <div>
          <h1 className="text-[#0466C1] font-semibold uppercase text-2xl mb-3">
            Overview of our past Hiring Process
          </h1>
          <p className="text-slate-500">
            In this quiz, you will be tested on Core Java basics and OOPS
            concepts. There are some code snippets too to test your basic Java
            coding
          </p>
        </div>

        {/* Cards section */}
        <div className="w-full mt-10 flex gap-3">
          <div className="w-1/3 border-[1px] rounded-lg overflow-hidden">
            <div className="w-full p-4 bg-[#0466C2] text-white font-bold">
              July - Sept
            </div>
            <div className="text-black flex flex-col p-2">
              <div className="flex gap-3 py-3 px-4">
                <span className="bg-[#009F3F] w-6 h-6 flex items-center justify-center text-white rounded-full bg-transparent text-lg font-bold">
                  ✓
                </span>
                <p>Quality</p>
              </div>
              <div className="flex gap-3 py-3 px-4">
                <span className="bg-[#009F3F] w-6 h-6 flex items-center justify-center text-white rounded-full bg-transparent text-lg font-bold">
                  ✓
                </span>
                <p>100+ Students Placed Successfully</p>
              </div>
              <div className="flex gap-3 py-3 px-4">
                <span className="bg-[#009F3F] w-6 h-6 flex items-center justify-center text-white rounded-full bg-transparent text-lg font-bold">
                  ✓
                </span>
                <p>100+ Students Placed Successfully</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 border-[1px] rounded-lg overflow-hidden">
            <div className="w-full p-4 bg-[#0466C2] text-white font-bold">
              April - June
            </div>
            <div className="text-black flex flex-col p-2">
              <div className="flex gap-3 py-3 px-4">
                <span className="bg-[#009F3F] w-6 h-6 flex items-center justify-center text-white rounded-full bg-transparent text-lg font-bold">
                  ✓
                </span>
                <p>Quality</p>
              </div>
              <div className="flex gap-3 py-3 px-4">
                <span className="bg-[#009F3F] w-6 h-6 flex items-center justify-center text-white rounded-full bg-transparent text-lg font-bold">
                  ✓
                </span>
                <p>100+ Students Placed Successfully</p>
              </div>
              <div className="flex gap-3 py-3 px-4">
                <span className="bg-[#009F3F] w-6 h-6 flex items-center justify-center text-white rounded-full bg-transparent text-lg font-bold">
                  ✓
                </span>
                <p>100+ Students Placed Successfully</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 border-[1px] rounded-lg overflow-hidden">
            <div className="w-full p-4 bg-[#0466C2] text-white font-bold">
              Oct - Dec
            </div>
            <div className="text-black flex flex-col p-2">
              <div className="flex gap-3 py-3 px-4">
                <span className="bg-[#009F3F] w-6 h-6 flex items-center justify-center text-white rounded-full bg-transparent text-lg font-bold">
                  ✓
                </span>
                <p>Quality</p>
              </div>
              <div className="flex gap-3 py-3 px-4">
                <span className="bg-[#009F3F] w-6 h-6 flex items-center justify-center text-white rounded-full bg-transparent text-lg font-bold">
                  ✓
                </span>
                <p>100+ Students Placed Successfully</p>
              </div>
              <div className="flex gap-3 py-3 px-4">
                <span className="bg-[#009F3F] w-6 h-6 flex items-center justify-center text-white rounded-full bg-transparent text-lg font-bold">
                  ✓
                </span>
                <p>100+ Students Placed Successfully</p>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-white text-black max-h-10 p-4 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <span>Start Hiring</span>
            <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
              ›
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastHiringProcess;
