import dynamic from 'next/dynamic';
const AboutCard = dynamic(() => import('../models/AboutCard'));

const AboutFeature = () => {
  const aboutCardData = [
    { id: "1", img: "/icons/Heart_Orange.svg", color: "#A7F428", title: "Network and Collaboration", content: "At Maasta, we cherish the power of profound connections. Our platform unites talents, professionals, and passionate enthusiasts from diverse corners of the media industry, igniting collaborations that transcend limits and ignite" },
    { id: "2", img: "/icons/Flash_Icon.svg", color: "#FFF967", title: "Career Growth", content: "Discover your potential through Maasta all-encompassing job portal and learning hub  ideal avenues to spotlight your skills, enhance your knowledge, and elevate your career to unprecedented levels" },
    { id: "3", img: "/icons/Star_Icon.svg", color: "#A7F428", title: "Skill Showcasing", content: "Elevate your talent like never before. Maasta provides an exclusive platform to showcase your skills, craft remarkable portfolios, and shine in a competitive market" },
    { id: "4", img: "/icons/Public_person.svg", color: "#FFF967", title: "Engagement and Community", content: "Join a dynamic community of like-minded fans and industry professionals who share your passion. Dive into engaging discussions, exchange reviews, and become a valued member of a community that celebrates the enchantment of media and entertainment" },
  ];

  return (
    <div className='flex flex-col w-full justify-center '>
      <div className='w-[100%] md:w-[95%] md:max-w-[700px] lg:w-[80%] lg:max-w-[730px] xl:w-[62%] xl:max-w-[750px] 2xl:w-[63%] 2xl:max-w-[850px] flex flex-row flex-wrap items-center justify-center gap-8 my-10 mx-auto'>
        {aboutCardData.map((item, index) => (
          <AboutCard key={index} color={item.color} img={item.img} title={item.title} desc={item.content} />
        ))}
      </div>
    </div>
  )
}

export default AboutFeature;