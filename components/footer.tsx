import Image from "next/image";
import discord from "@/public/icons/discord.svg";
import instagram from "@/public/icons/instagram.svg";
import facebook from "@/public/icons/facebook.svg";
import twitter from "@/public/icons/twitter.svg";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      title: "Explore",
      items: ["Go Pro", "Explore Designs", "Create Designs", "Playoffs"],
    },
    {
      title: "Innovate",
      items: ["Tags", "API", "Places", "Creative Markets"],
    },
    {
      title: "About",
      items: ["Community", "Designers", "Support", "Terms of service"],
    },
    {
      title: "Legals",
      items: [
        { name: "Privacy Policy", route: "/privacy-policy" },
        { name: "Terms and Conditions", route: "/terms-and-conditions" },
        { name: "Refund Policy", route: "/refund-policy" },
      ],
    },
  ];

  return (
    <div className="w-full md:h-[13vh] aspect-video">
      <div className="w-full flex items-start justify-start flex-wrap sm:flex-wrap xl:justify-start lg:justify-start md:justify-start sm:justify-start xl:gap-14 lg:gap-8 md:gap-6 xl:pl-[7%] lg:pl-[6%] md:pl-[4%] bg-black text-white p-5 gap-1">
        <div className="w-full flex flex-col xl:w-[40%] lg:w-[40%] md:w-[36%] lg:gap-5 md:gap-5 gap-3 pb-6 md:p-0 lg:p-0">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            Open Designers
          </p>
          <p className="text-[14px] xl:text-[16px] lg:text-lg md:text-[15px] font-light">
            Open source is source code that is made freely available for
            possible modification and redistribution. Products include
            permission to use the source code, design documents, or content of
            the product.
          </p>
          <div className="flex md:gap-4 lg:gap-6 gap-4 ">
            <Image src={discord} alt="discord" width={37} height={37} />
            <Image src={instagram} alt="instagram" width={30} height={30} />
            <Image src={facebook} alt="facebook" width={30} height={30} />
            <Image src={twitter} alt="twitter" width={30} height={30} />
          </div>
        </div>

        <div className="md:w-[40%] w-full flex flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap xl:gap-4 lg:gap-1 md:gap-0 gap-4 text-start">
          {footerLinks.map(({ title, items }) => (
            <div className="flex flex-wrap " key={title}>
              {" "}
              {/* grid sm:grid-rows-2 grid-rows-4 gap-1 shrink-0*/}
              <ul className="flex flex-col">
                <p
                  className="text-md md:text-lg lg:text-xl font-semibold row-span-1 "
                  style={{ marginBottom: "calc(10px + 1vw)" }}
                >
                  {title}
                </p>
                {items.map((link, index) => (
                  <div key={index} className="flex flex-col flex-wrap !gap-2">
                    <li className="flex flex-col flex-wrap gap-2 lg:gap-4 md:gap-1">
                      {typeof link === "string" ? (
                        <p className="text-[12px] font-semibold w-max xl:text-[15px] lg:text-[14px] md:text-[11px] sm:text-sm pl-3 md:pl-2 p-2 hover:text-[#FF8C00] cursor-pointer">
                          {link}
                        </p>
                      ) : (
                        <Link
                          href={link.route}
                          className="text-[12px] font-semibold w-max xl:text-[15px] lg:text-[14px] md:text-[11px] sm:text-sm pl-3 md:pl-2 p-2 hover:text-[#FF8C00 cursor-pointer "
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="w-full xl:h-auto bg-white pl-[4%] xl:pl-[7%] lg:pl-[6%] md:pl-[4%] text-[14px] py-2 text-black font-medium text-textColor-100">
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
