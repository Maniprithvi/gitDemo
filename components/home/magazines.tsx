import dynamic from "next/dynamic";
const MagazineCard = dynamic(() => import("../models/MagazineCard"));




const Magazines = () => {
    const magazineData = [
        { id: "1", img: "/images/Magazine_1.svg", date: "25th January", readTime: "2 min read", title: "the Vibrant World of Indian Filmmaking: Lights, Camera, Action!", content: "Indian filmmaking is a dynamic and colorful tapestry woven with passion, creativity, and cultural richness. The Indian film industry, often referred to as Bollywood ..." },
        { id: "2", img: "/images/Magazine_2.svg", date: "25th January", readTime: "2 min read", title: "the Vibrant World of Indian Filmmaking: Lights, Camera, Action!", content: "Indian filmmaking is a dynamic and colorful tapestry woven with passion, creativity, and cultural richness. The Indian film industry, often referred to as Bollywood ..." },
        { id: "3", img: "/images/Magazine_3.svg", date: "25th January", readTime: "2 min read", title: "the Vibrant World of Indian Filmmaking: Lights, Camera, Action!", content: "Indian filmmaking is a dynamic and colorful tapestry woven with passion, creativity, and cultural richness. The Indian film industry, often referred to as Bollywood ..." },
        { id: "4", img: "/images/Magazine_4.svg", date: "25th January", readTime: "2 min read", title: "the Vibrant World of Indian Filmmaking: Lights, Camera, Action!", content: "Indian filmmaking is a dynamic and colorful tapestry woven with passion, creativity, and cultural richness. The Indian film industry, often referred to as Bollywood ..." },
        { id: "5", img: "/images/Magazine_5.svg", date: "25th January", readTime: "2 min read", title: "the Vibrant World of Indian Filmmaking: Lights, Camera, Action!", content: "Indian filmmaking is a dynamic and colorful tapestry woven with passion, creativity, and cultural richness. The Indian film industry, often referred to as Bollywood ..." },
        { id: "6", img: "/images/Magazine_6.svg", date: "25th January", readTime: "2 min read", title: "the Vibrant World of Indian Filmmaking: Lights, Camera, Action!", content: "Indian filmmaking is a dynamic and colorful tapestry woven with passion, creativity, and cultural richness. The Indian film industry, often referred to as Bollywood ..." }
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center gap-2">
            <h2 className="text-[26px] font-bold text-center text-[#910AD0] xl:text=[48px] lg-text-[46px] md:text-[44px] sm:text-[38px]">Magazines</h2>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center items-center gap-2 ">
                {magazineData.map((item, index) => (
                    <MagazineCard key={index} img={item.img} date={item.date} readTime={item.readTime} title={item.title} content={item.content} />
                ))}
            </div>
            <button className={"w-auto h-auto text-[md] lg:text-xl rounded-2xl text-center text-white px-3 mt-6 xl:mt-6  lg:mt-8 md:mt-6 sm:mt-4 text-lg font-bold xl:px-14 lg:px-10 md:px-8 sm:px-8 xs:px-8 py-4 mx-auto bg-gradient-to-t from-[#FF8725] to-[#FF5C00]"}>
                Read more
            </button>
        </div>
    )
}

export default Magazines;
