import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

const Pricing = () => {
  const [isYearly, setYr] = useState("");
  const packs = [
    {
      name: "Start",
      monthFee: 19,
      yearFee: 199,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum minus perspiciatis eum consequuntur labore, alias culpa iure pariatur illo in aliquam debitis",
    },
    {
      name: "Premium",
      monthFee: 39,
      yearFee: 299,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum minus perspiciatis eum consequuntur labore, alias culpa iure pariatur illo in aliquam debitis",
      red: "text",
    },
    {
      name: "Advance",
      monthFee: 79,
      yearFee: 699,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum minus perspiciatis eum consequuntur labore, alias culpa iure pariatur illo in aliquam debitis",
      green: "react/great-course/",
      red: "text",
    },
  ];
  return (
    <div className="md:px-14 p-4 max-w-s py-9 mx-auto mt-6 mb-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold  mb-2">
          Here are our <span className="text-[#48cae4]">Pricing Schemes</span>
        </h2>
        <p className="md:w-1/3 text-tertiary mx-auto px-4">
          Our plans are majorly comprised of three main elements. Out which all
          are easily understandable to the users
        </p>
        <div className="mt-16">
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={!isYearly}
            onChange={() => setYr(!isYearly)}
          />
          <label
            htmlFor="toggle"
            className="inline-flex cursor-pointer items-center"
          >
            <span className="mr-8 text-2xl font-normal">Monthly</span>
            <div className="w-14 h-6 bg-gray-200 rounded-full transition duration-300 ease-in-out relative">
              <div
                className="w-6 h-6 rounded-full transition duration-300 ease-in-out absolute top-0 transform bg-primary"
                style={{
                  transform: isYearly ? "translateX(100%)" : "translateX(0)",
                }}
              ></div>
            </div>

            <span className="ml-8 text-2xl font-normal">Yearly</span>
          </label>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mx-auto md:w-11/12 ">
        {packs.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h3 className="text-2xl font-bold text-center">{pkg.name}</h3>
            <p className="text-tertiary text-left my-5">{pkg.desc}</p>
            <p className="text-center mt-5 text-secondary text-3xl font-semibold">
              {isYearly ? `$${pkg.yearFee}` : `$${pkg.monthFee}`}

              <span className="text-base text-tertiary font-medium">
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex gap-2">
                {pkg.green ? (
                  <FaCheckCircle className="text-xl text-green-500"></FaCheckCircle>
                ) : (
                  <FcCancel className="text-xl" />
                )}
                Video Tutorials{" "}
              </li>
              <li className="flex gap-2">
                {pkg.red ? (
                  <FaCheckCircle className="text-xl text-green-500"></FaCheckCircle>
                ) : (
                  <FcCancel className="text-xl" />
                )}
                Curated service{" "}
              </li>

              <li className="flex gap-2">
                {pkg.red ? (
                  <FaCheckCircle className="text-xl text-green-500"></FaCheckCircle>
                ) : (
                  <FcCancel className="text-xl" />
                )}
                Feedbacks{" "}
              </li>
              <li className="flex gap-2">
                {pkg.green ? (
                  <FaCheckCircle className="text-xl text-green-500"></FaCheckCircle>
                ) : (
                  <FcCancel className="text-xl" />
                )}
                Assesment{" "}
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="border p-4 px-6 border-cyan-300 hover:bg-primary hover:text-white">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
