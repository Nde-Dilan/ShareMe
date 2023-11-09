"use client";

import { useState } from "react";

import { NavBar, Feed, PinDetails, CreatePin, Search } from "@components";
import { usePathname } from "next/navigation";
import Home from "./Home";
import FeedList from "./FeedList";
const Pins = ({user}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const pathName = usePathname();

  return (
    <div className="px-2 md:px-5">
      <div className="bg-red-500">
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user && user}/>
      </div>
      <div className="h-full">
       <FeedList numberOfFeed={4} feeds={[]}/>
      </div>
    </div>
  );
};

export default Pins;
