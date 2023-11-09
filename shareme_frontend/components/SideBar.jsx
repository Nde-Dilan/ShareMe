"use client"

import Link from "next/link";
import Image from "next/image";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";

//TODO: The NavLink alternative in nextjs

const SideBar = ({ user, closeToggle }) => {
  if(user){
    localStorage.setItem('user_name',user?.userName);
    localStorage.setItem('user_id',user?._id);
    localStorage.setItem('user_image_link',user?.image);

  }

  const pathname = usePathname();
  const isNotActiveStyle =
    "flex items-center gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
  const isActiveStyle =
    "flex items-center gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

  const categories = [
    {
      name: "Animals",
      path: "/Animals",
    },
    {
      name: "Wallpapers",
      path: "/Wallpapers",
    },
    {
      name: "Photography",
      path: "/Photography",
    },
    {
      name: "Gaming",
      path: "/Gaming",
    },
    {
      name: "Coding",
      path: "/Coding",
    },
  ];

  const router = useRouter();

  const handleCloseSideBar = (e,path=null) => {
    e.preventDefault();
    path &&( path ==="home" ? router.push("/"+path) : router.push('/category/'+path));
    if (closeToggle) closeToggle(false);
  };
  return (
    <section className="flex flex-col overflow-y-scroll justify-between h-full hide-scrollbar min-w-210 bg-white">
      <div className="flex flex-col p-3">
        <Link
          href="/home"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSideBar}
        >
          <Image
            width={98}
            height={98}
            src="/assets/logo.png"
            alt="logo"
            className="w-full"
          />
        </Link>
        <div className="flex flex-col gap-5">
          {/* <nav className={({isActive })=> isActive ? isActiveStyle : isNotActiveStyle}>

          </nav> */}
          <Link
            
            href={`/home`}
            onClick={(e)=>handleCloseSideBar(e,'home')}
            className={
              pathname.includes('/home')
                ? isActiveStyle
                : isNotActiveStyle
            }
            key="Home"
          >
            <RiHomeFill />
            Home
          </Link>
            
          
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">
            Discover Categories
          </h3>
          {categories.slice(0, categories.length - 1).map((categorie) => (
            <Link
            
              href={`/category/${categorie.name}`}
              onClick={(e)=>handleCloseSideBar(e,categorie.name)}
              className={
                pathname.includes(categorie.path)
                  ? isActiveStyle
                  : isNotActiveStyle
              }
              key={categorie.name}
            >
              {categorie.name}
            </Link>
          ))}
        </div>
      </div>
      {user && (
        <Link
          className="border flex my-5 gap-2 p-4 cursor-pointer shadow-slate-700 rounded-lg items-center mx-3"
          href={`user-profile/${localStorage.getItem('user_id')}`}
        >
          <Image
            width={38}
            height={10}
            src={user?.image}
            alt="My profile image"
            className="rounded-full"
            onClick={handleCloseSideBar}
          />
          <p>{localStorage.getItem('user_name')}</p>
        </Link>
      )}
    </section>
  );

};

export default SideBar;
