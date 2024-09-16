import dynamic from "next/dynamic";
const TalentCard = dynamic(() => import("../models/talentCard"));

interface UnleashTalentsProps {}

const UnleashTalents: React.FC<UnleashTalentsProps> = () => {
  const talentCardData = [
    { img: "/images/sining_1.svg", content: "Audition", color: "#28ABF4" },
    { img: "/images/sining_2.svg", content: "Contest", color: "#F45928" },
    { img: "/images/sining_3.svg", content: "Learning", color: "#9A28F4" },
    { img: "/images/sining_1.svg", content: "Sports", color: "#9A28F4" },
    { img: "/images/sining_2.svg", content: "Contest", color: "#F45928" },
    { img: "/images/sining_3.svg", content: "Learning", color: "#28ABF4" },
  ];

  return (
    <div className="w-full flex flex-col gap-6 justify-center">
      <div className="flex flex-col justify-center gap-2 p-2">
        <h2 className="text-[26px] font-bold text-center text-[#910AD0] xl:text=[48px] lg-text-[46px] md:text-[44px] sm:text-[38px]">
          Unleash your talents
        </h2>
        <p className="text-[13px] font-medium text-center text-[#333333] xl:w-[520px] xl:text-[20px] lg-text-[20px] lg-w-[520px] mx-auto md:w-[468px] md:text-[18px] sm:w-[362px] sm:text-[16px]">
          Pick your event, book your spot, and let the fun begin. It&apos;s that
          easy to make memories with us!
        </p>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center gap-4 mx-auto xl:px-2">
        {talentCardData.map((item, index) => (
          <TalentCard
            key={index}
            image={item.img}
            content={item.content}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default UnleashTalents;
