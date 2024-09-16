"use client"

import { SignUpForm } from "@/components/auth/LoginForm";
import { login } from "@/app/actions/auth";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full xl:w-[50%] md:w-[50%] flex flex-col items-center justify-center gap-4 py-12 px-8 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register
            </h2>
          </div>
          <SignUpForm />
          <div className="text-center text-sm">
            <p>
              Already have an account? click here to{" "}
              <a
                href="/auth/sign-in"
                className="font-medium text-[#BA3ADA] hover:text-indigo-500"
              >
                Sign In
              </a>
            </p>
          </div>
          <div className="w-full h-fit-content border-t-[#E6E6E6] border-t-[2px] flex flex-col py-6 gap-6">
            <p className="text-sm text-[#333333] font-bold text-center">
              or login using
            </p>
            <div className="flex flex-row justify-evenly">
              <div
                className="flex p-4 rounded-full border-[0.5px] border-[#FF8725]"
                onClick={() => login("google")}
              >
                <Image
                  src="/icons/devicon_google.svg"
                  alt={"svg"}
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex p-4 rounded-full border-[0.5px] border-[#FF8725]">
                <Image
                  src="/icons/logo_facebook.png"
                  alt={"svg"}
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex p-4 rounded-full border-[0.5px] border-[#FF8725]">
                <Image
                  src="/icons/devicon_twitter.svg"
                  alt={"svg"}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:px-16 lg:px-6 md:px-14 sm:px-6 xs:px-1 xxs:px-1">
          <div className="w-auto h-fit-content flex flex-row items-center justify-evenly bg-[#A9FE81] rounded-[20px] py-6 sm:mx-0">
            <div className="w-[18%] rounded-full flex items-center sm:w-[20%]">
              <Image
                src="/icons/Login_quotes.svg"
                alt="quotesPic"
                width={140}
                height={140}
              />
            </div>
            <div className="w-[54%] flex flex-col">
              <Image
                src="/icons/Start_Quotes.svg"
                alt="quotesPic"
                width={27}
                height={25}
              />
              <p className="text-sm font-medium ml-10 sm:ml-4 xs:ml-2">
                Maasta is a game-changer! It&apos;s a community that fuels
                creativity and connections, propelling careers in media. A
                beacon for talent and innovation!
              </p>
              <div className="w-full flex flex-row items-center justify-between">
                <h6 className="text-sm font-bold ml-10 sm:ml-4 xs:ml-2">
                  . M. keerthana
                </h6>
                <Image
                  src="/icons/End_Quotes.svg"
                  alt="quotesPic"
                  width={27}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
