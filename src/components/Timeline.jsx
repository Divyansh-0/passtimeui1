import React from "react";

const Timeline = () => {
  return (
    <div className="flex flex-col items-centre justify-center mx-auto space-x-9 md:space-x-24">
      <h1 className="mx-auto text-3xl md:text-5xl font-semibold mb-10">
        What is Our <span className="text-[#48cae4]">History?</span>{" "}
      </h1>
      <div className="flex flex-col text-centre items-centre space-x-2 justify-center">
        <div className="flex flex-col max-w-screen-md justify-center">
          <div className="flex justify-between h-48">
            {/* LEFT */}
            <div className="w-1/3 ">
              <div className="bg-gray-300 p-3 font-semibold rounded-b-lg rounded-s-lg">
                The thought and the ideation
              </div>
              <div className="p-3 text-sm italic">
                A resolve formed and an idea imagined{" "}
              </div>
              <div className="p-3 text-red-400 text-sm font-semibold">
                Since 1995
              </div>
            </div>
            {/* CENTER */}
            <div className="w-1/6 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-1/3 "></div>
          </div>
          {/* EXPERIENCE LIST ITEM */}
          <div className="flex justify-between h-48">
            {/* LEFT */}
            <div className="w-1/3 "></div>
            {/* CENTER */}
            <div className="w-1/6 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-1/3 ">
              <div className="bg-gray-300 p-3 font-semibold rounded-b-lg rounded-s-lg">
                The Refinement and Effort
              </div>
              <div className="p-3 text-sm italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iste totam? Alias nulla excepturi maxime natus
                consequatur veniam qui facere et.
              </div>
              <div className="p-3 text-red-400 text-sm font-semibold">
                1998 - 2003
              </div>
            </div>
          </div>
          {/* EXPERIENCE LIST ITEM */}
          <div className="flex justify-between h-48">
            {/* LEFT */}
            <div className="w-1/3 ">
              <div className="bg-gray-300 p-3 font-semibold rounded-b-lg rounded-s-lg">
                The Change
              </div>
              <div className="p-3 text-sm italic">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis assumenda enim soluta voluptate suscipit aliquid
                expedita?
              </div>
              <div className="p-3 text-red-400 text-sm font-semibold">
                2003 - present
              </div>
            </div>
            {/* CENTER */}
            <div className="w-1/6 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-1/3 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
