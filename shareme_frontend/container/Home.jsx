"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { Search, SideBar } from "@components";
import { client, getUser } from "@src/client";
import Pins from "./Pins";
import Link from "next/link";
import Image from "next/image";

import { useRouter, usePathname } from "next/navigation";
import UserProfile from "@components/UserProfile";
const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();

  // console.log(session);

  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [user, setUser] = useState({});
  const scrollRef = useRef(null);

  useEffect(() => {
    // const query = userQuery(session?.user?.image, session?.user?.name);
    // client.fetch(query).then((data) => {
    //   setUser(data[0]);

    // });
    console.log(session?.user?.name);
    const userDB = getUser(session?.user?.image, session?.user?.name);
    console.log("------------------<user>------------");
    console.log(
      userDB.then((result) => {
        console.log(result);
        setUser(result);
      })
    );
  }, []);
  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <SideBar user={user && user} />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between  items-center shadow-md">
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSideBar(true)}
          />
          <Link href="/home">
            <Image
              width={98}
              height={98}
              src="/assets/logo.png"
              alt="logo"
              className="w-28"
            />
          </Link>
          <Link href={`/user-profile/${user?._id}`}>
            <Image
              width={48}
              height={48}
              src={session?.user?.image}
              alt="logo"
              className="w-22 h-22 rounded-full"
            />
          </Link>
        </div>
        {toggleSideBar && (
          <div className="fixed md:w-3/5 sm:w-2/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute items-center p-2 w-full flex justify-end">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSideBar(false)}
              />
            </div>
            <SideBar user={user && user} closeToggle={setToggleSideBar} />
          </div>
        )}
      </div>
      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        {pathName.includes("/user-profile") ? <UserProfile /> : <Pins user={user && user} />}
      </div>
    </div>
  );
};
export default Home;
