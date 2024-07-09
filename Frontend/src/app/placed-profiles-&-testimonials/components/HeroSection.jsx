"use client";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

const HeroSection = ({ headerData }) => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  if (!headerData) {
    return <p className="w-[80%] text-lg mx-auto">Loading...</p>;
  }
  let { title, subTitle, headerImage } = headerData;

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/consultant-data", { name, email, phone })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };
  return (
    <div>
      <section id="homepage" className="w-[100%] h-100 bg-black">
        <div className="w-full relative flex justify-center items-center">
          <div className="relative w-full ">
            <Image
              width={700}
              height={400}
              style={imgStyling}
              src={headerImage}
              alt="heroImg"
              className="w-full h-full p-0 m-0 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
          </div>

          <div className="w-[80%] absolute left-[10%] flex gap-5">
            <div className="w-[65%] flex flex-col justify-start gap-8">
              <h1 className="w-full uppercase text-white text-start text-[40px] font-semibold ">
                {title}
              </h1>
              <p className="w-[35rem] text-start text-white text-lg font-light mb-8">
                {subTitle}
              </p>
              <form className="w-full flex flex-col gap-5">
                <div className="text-white w-full flex gap-5">
                  <div className="flex gap-2 text-lg">
                    <input
                      type="radio"
                      name="position"
                      id="job"
                      value={"job"}
                    />
                    <label htmlFor="job">Job</label>
                  </div>
                  <div className="flex gap-2 text-lg">
                    <input
                      type="radio"
                      name="position"
                      id="internship"
                      value={"internship"}
                    />
                    <label htmlFor="internship">Internship</label>
                  </div>
                </div>
                <div className="w-[80%] flex gap-4">
                  <select
                    name="role"
                    className="bg-transparent border-2 border-slate-200 p-3 rounded-lg text-slate-400 w-1/2"
                  >
                    <option value="">Team Lead</option>
                    <option value="">Frontend Developer</option>
                    <option value="">Backend Developer</option>
                    <option value="">UI / UX Designer</option>
                  </select>
                  <select
                    name="activity"
                    className="bg-transparent border-2 border-slate-200 p-3 rounded-lg text-slate-400 w-1/2"
                  >
                    <option value="">Warn Up</option>
                    <option value="">Problem solving</option>
                    <option value="">Tests</option>
                    <option value="">Contests</option>
                  </select>
                </div>
                <button type="submit" className=" w-[180px] p-2 mt-10 gap-1 border-2 border-white rounded-md flex justify-center items-center font-semibold hover:bg-[#0c8ce9] text-white hover:border-0">
                  <p >Start Practise</p>
                  <p className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                    ›
                  </p>
                </button>
              </form>
            </div>

            {/* Consultant Form */}

            <div className="w-[28%] py-5 px-2 bg-white flex flex-col rounded-md">
              <h3 className="my-3 text-center font-semibold">
                Get The Program Details
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  className="w-full p-2 my-2 rounded-md border-2 border-slate-300"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email*"
                  name="email"
                  className="w-full p-2 my-2 rounded-md border-2 border-slate-300"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone Number*"
                  name="phone"
                  className="w-full p-2 my-2 rounded-md border-2 border-slate-300"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="border-2 my-2 border-black w-[75%] mx-auto flex justify-center p-2 rounded-lg hover:bg-[#0c8ce9] hover:text-white hover:border-0 hover:my-[9px]">
                  <button
                    type="submit"
                    className="font-semibold flex items-center w-[100%] justify-center"
                  >
                    <span>Talk to our Consultant</span>
                    <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                      ›
                    </span>
                  </button>
                </div>
              </form>
              <p className="opacity-50 text-[.8rem] text-center">
                By submitting this form, you consent to our Terms of Use &
                Privacy Policy and table contacted by us via Email/Call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
