import React from "react";

import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/navbar"));
const Footer = dynamic(() => import("@/components/footer"));

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 w-[100%] overflow-y-auto mx-auto ">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
