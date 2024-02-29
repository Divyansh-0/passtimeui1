import Img from "/kN.jpg";

const Home = () => {
  return (
    <div className="bg-gray-800 relative md:h-[75vh] h-44 -z-10  bg-cover bg-center">
      <img
        src="https://images.pexels.com/photos/265144/pexels-photo-265144.jpeg"
        alt=""
        className="absolute left-0 object-cover w-full h-full mix-blend-lighten"
      />
      <div className="p-6 flex items-start space-y-5 flex-col">
        <h1 className="text-white text-4xl md:mt-24 ">
          Reimagining the Future
        </h1>
        <h1 className="text-white text-4xl ">
          And
          <span className="text-[yellow]"> ReDefine</span> it
        </h1>
      </div>
    </div>
  );
};

export default Home;
