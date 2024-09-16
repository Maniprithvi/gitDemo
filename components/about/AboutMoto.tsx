import AboutMotoCard from "../models/AboutMotoCard";

const data = [
  {
    title: "Our vision",
    desc: "We envision a future where every individual in the media and entertainment industry has the tools, connections, and opportunities they need to succeed. Maasta is here to make that vision a reality, creating a thriving ecosystem where creativity knows no bounds",
  },
  {
    title: "our mission",
    desc: "At Maasta, we're on a mission to revolutionize the way media professionals connect, showcase their skills, and thrive in the dynamic landscape of entertainment. Our platform is designed to provide you with a seamless and enriching experience, whether you're an aspiring talent, an established industry expert, or a dedicated fan",
  },
];
const AboutMoto = () => {
  return (
    <>
      <div
        className=" w-[90%] sm:w-[80%] mx-auto md:w-[80%] lg:w-[70%] xl:w-[60%] md:mx-auto  rounded-3xl bg-gradient-to-b from-orange-600 to-orange-400 
       text-center py-3 md:py-4 lg:py-7 aspect-video flex flex-col items-center gap-5 md:gap-3 text-white md:mt-5"
      >
        {data.map((item) => (
          <AboutMotoCard key={item.title} title={item.title} desc={item.desc} />
        ))}
      </div>
    </>
  );
};

export default AboutMoto;
