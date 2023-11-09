"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdSearch } from "react-icons/io";

//INFO: Fetch the data from here and store it inside the application, then rernder the feedList component with the new data

const NavBar = ({ searchTerm, setSearchTerm, user }) => {
  if (!user) return null;
  const router = useRouter();
  return (
    <div className="flex bg-red-500 rounded-sm gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start iyrms-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1 mt-2" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          value={searchTerm}
          // onFocus={()=>router.push('/search')}
          className="w-full p-2 bg-white outline-none"
        />
      </div>
      <div className="flex gap-3">
        <Link
        href={`user-profile/`} className="hidden md:block">
          <img
            src={user?.image}
            alt="User image"
            className="w-14 h-12 rounded-lg"
          />
        </Link>
        <Link></Link>
      </div>
    </div>
  );
};

export default NavBar;
