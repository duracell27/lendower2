import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import LogOutButton from "./buttons/LogOutButton";


const Header = async () => {
  const session = await getServerSession(authOptions);

  // console.log(session)
  return (
    <div className="flex justify-between items-center bg-green-800 py-3 px-6">
      <Link href={"/"} className="text-2xl text-white font-bold">
        Lend Ower
      </Link>
      <div className="">
        {!!session && (
          <div className="flex gap-2 items-center ">
            <Link
              href={`/account/friends`}
              className="flex gap-2 items-center bg-green-900 p-1 rounded-full pl-3"
            >
              <span className="text-xl text-white">{session?.user?.name}</span>
              <Image
                className="rounded-full aspect-square"
                src={session?.user?.image}
                alt="userLogo"
                width={36}
                height={36}
              />
            </Link>
            <LogOutButton/>
          </div>
        )}
        {!session && (
          <Link href={"/login"}>
            <Button>Вхід</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
