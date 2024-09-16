"use client";
import { logout } from "@/app/actions/auth";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        logout();
        // if (window) {
        //   window.location.reload();
        // }
        router.push("/");
      }}
    >
      <div className=" text-gary-600 text-sm px-3 py-2 rounded-md cursor-pointer flex ">
        <LogOut className="mr-2 h-4 w-4" />
        logout
      </div>
    </div>
  );
};

export default Logout;
