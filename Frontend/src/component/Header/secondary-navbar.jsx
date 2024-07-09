import Link from "next/link";

const SecondaryNavbar = () => {
  return (
    <header className="relative w-full flex flex-wrap justify-around p-5 ">
      <div>
        <ul className="flex space-x-4">
          <li className="px-3 font-semibold">
            <Link href={"/learn"}>Learn</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link href="/job-preparation">Preparation</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link href="/communities">Communities</Link>
          </li>
          <li className="px-3 font-semibold group">
            <Link href="/success-stories">Success Stories</Link>
            <div className="w-full absolute left-0 top-[90%] mt-1 bg-white rounded-md shadow-lg opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-[2] pointer-events-auto group-hover:pointer-events-auto">
              <div className="flex flex-col gap-3 w-1/2 mx-auto pointer-events-auto">
                <h2 className="text-[#03006D] underline ">Success Stories</h2>
                <ul className="w-full flex flex-col gap-2 text-slate-400">
                  <li>
                    <Link
                      href="/college-collaborations"
                      className="block  hover:bg-gray-200"
                    >
                      College Collaborations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company-collaborations"
                      className="block hover:bg-gray-200"
                    >
                      Company Collaborations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/placed-profiles-&-testimonials"
                      className="block hover:bg-gray-200"
                    >
                      Placed profiles & Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="px-3 font-semibold">
            <Link href="/master-class">Master Class</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link href="/resources">Resources</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link href="/road-map">Roadmaps</Link>
          </li>
        </ul>
      </div>
      <button className="bg-white px-5 py-1 border-2 border-black rounded-md ">
        Login
      </button>
    </header>
  );
};

export default SecondaryNavbar;
