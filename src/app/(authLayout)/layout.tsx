"use client";
import Image from "next/image";
import authImg from "@/assets/auth.png";
import logo from "@/assets/white logo.svg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto flex flex-col items-center justify-center">
      <div className="h-screen grid grid-cols-2 w-full ">
        <div className="px-20 flex flex-col justify-center">
          <Image
            className="mx-auto"
            src={logo}
            width={170}
            height={170}
            alt="auth"
          />
          <Image
            className="mx-auto my-14"
            src={authImg}
            width={500}
            height={500}
            alt="auth"
          />
          <div className="text-center">
            <p className="mx-40 text-white mt-2">Welcome to</p>
            <h3 className="text-white text-[56px] font-bold my-1">
              Player Central
            </h3>
            <p className="text-secondary-foreground mx-40 mt-2">
              Designed to showcase talent, support development, and create real
              pathways in football.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">{children}</div>
      </div>
      <div></div>
    </main>
  );
};

export default AuthLayout;
