export const AboutFeatureData = [
  {
    i: 1,
    title: "Network and Collaboration",
    desc: "At Maasta, we cherish the power of profound connections. Our platform unites talents, professionals, and passionate enthusiasts from diverse corners of the media industry, igniting collaborations that transcend limits and ignite",
    img: "/images/About/Frame 184.png",
  },
  {
    i: 2,
    title: "Career Growth",
    desc: "Discover your potential through Maasta's all-encompassing job portal and learning hub. Explore ideal avenues to spotlight your skills, enhance your knowledge, and elevate your career to unprecedented levels",
    img: "/images/About/zap.png",
  },
  {
    i: 4,
    title: "Skill Showcasing",
    desc: "Elevate your talent like never before. Maasta provides an exclusive platform to showcase your skills, craft remarkable portfolios, and shine in a competitive market",
    img: "/images/About/Vector.png",
  },
  {
    i: 5,
    title: "Engagement and Community",
    desc: "Join a dynamic community of like-minded fans and industry professionals who share your passion. Dive into engaging discussions, exchange reviews, and become a valued member of a community that celebrates the enchantment of media and entertainment",
    img: "/images/About/Group 72.png",
  },
];

const sayHai="hai hzi"
export const eventData: object[] = [
  {
    id: "1",
    eventImg: "/images/Rectangle.png",
    eventPrize: "₹ 5000",
    eventCost: "₹ 50",
    attendance: "350",
    eventDate: "Aug 11 - Sep 30",
    eventNamePlace: "Talent show - Tamil Nadu",
    eventDescription: "Get ready to groove and move at our electrifying dance",
  },
  {
    id: "2",
    eventImg: "/images/Rectangle.png",
    eventPrize: "₹ 5000",
    eventCost: "₹ 50",
    attendance: "350",
    eventDate: "Aug 11 - Sep 30",
    eventNamePlace: "Talent show - Tamil Nadu",
    eventDescription: "Get ready to groove and move at our electrifying dance",
  },
  {
    id: "3",
    eventImg: "/images/Rectangle.png",
    eventPrize: "₹ 5000",
    eventCost: "₹ 50",
    attendance: "350",
    eventDate: "Aug 11 - Sep 30",
    eventNamePlace: "Talent show - Tamil Nadu",
    eventDescription: "Get ready to groove and move at our electrifying dance",
  },
  {
    id: "4",
    eventImg: "/images/Rectangle.png",
    eventPrize: "₹ 5000",
    eventCost: "₹ 50",
    attendance: "350",
    eventDate: "Aug 11 - Sep 30",
    eventNamePlace: "Talent show - Tamil Nadu",
    eventDescription: "Get ready to groove and move at our electrifying dance",
  },
  {
    id: "5",
    eventImg: "/images/Rectangle.png",
    eventPrize: "₹ 5000",
    eventCost: "₹ 50",
    attendance: "350",
    eventDate: "Aug 11 - Sep 30",
    eventNamePlace: "Talent show - Tamil Nadu",
    eventDescription: "Get ready to groove and move at our electrifying dance",
  },
  {
    id: "6",
    eventImg: "/images/Rectangle.png",
    eventPrize: "₹ 5000",
    eventCost: "₹ 50",
    attendance: "350",
    eventDate: "Aug 11 - Sep 30",
    eventNamePlace: "Talent show - Tamil Nadu",
    eventDescription: "Get ready to groove and move at our electrifying dance",
  },
  {
    id: "7",
    eventImg: "/images/Rectangle.png",
    eventPrize: "₹ 5000",
    eventCost: "₹ 50",
    attendance: "350",
    eventDate: "Aug 11 - Sep 30",
    eventNamePlace: "Talent show - Tamil Nadu",
    eventDescription: "Get ready to groove and move at our electrifying dance",
  },
  {
    id: "8",
    eventImg: "/images/Rectangle.png",
    eventPrize: "₹ 5000",
    eventCost: "₹ 50",
    attendance: "350",
    eventDate: "Aug 11 - Sep 30",
    eventNamePlace: "Talent show - Tamil Nadu",
    eventDescription: "Get ready to groove and move at our electrifying dance",
  },
];

export const types: object[] = [
  {
    id: 1,
    key: "day",
    values: ["today", "tomorrow", "this weekend"],
  },
  {
    id: 2,
    key: "price",
    values: ["25%", "50%", "70%"],
  },
  {
    id: 3,
    key: "category",
    values: ["comedy", "concerts"],
  },
];

export const omit = (obj: { [x: string]: any }, key: any) => {
  const date = new Date();

  const { [key]: omitted, ...rest } = obj;
  return rest;
};
