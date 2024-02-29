import React from "react";

const About = () => {
  return (
    <div className="container mx-auto md:m-20 m-5">
      <div className="text-3xl md:text-5xl font-semibold mx-auto">
        What is <span className="text-[#48cae4] ">DevCorp</span> ?
      </div>
      <div className="flex flex-col md:flex-row md:gap-10 gap-2">
        <div className="text-xl flex-1 mt-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus voluptatem ex libero odit nemo quia! Eligendi quaerat
          voluptatibus voluptates non, sit porro hic magni blanditiis
          repellendus inventore esse, quisquam asperiores necessitatibus maxime
          alias ut unde numquam harum amet culpa exercitationem nesciunt quis
          veniam atque! Soluta molestiae magni labore doloremque veritatis quod
          rerum? Officia nihil consequatur repudiandae, sit hic eum sapiente,
          cumque ex veritatis quam eius iusto magni.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quasi
          nisi, veniam libero reiciendis officia ducimus a illum numquam aperiam
          culpa hic quo, sed labore voluptates eum in nobis deserunt ipsam
          laudantium porro aliquam?
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 flex-1">
          <img
            src="https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg"
            className="w-full h-auto md:col-span-1 rounded"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3987110/pexels-photo-3987110.jpeg"
            className="w-full h-auto md:col-span-1 rounded"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3746933/pexels-photo-3746933.jpeg"
            className="w-full md:h-96 h-full md:row-span-2 rounded"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/7594824/pexels-photo-7594824.jpeg"
            className="w-full md:w-96 md:h-64 h-auto md:col-span-2 rounded "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
