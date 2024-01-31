"use client";

import Image from "next/image";

import Link from "next/link";

import { useState, useEffect, useContext } from "react";
// import { useLocation, Link } from "react-router-dom";

// // component
// import Auth from "../Auth/Auth";

// icons
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiFillPlusCircle,
} from "react-icons/ai";
("react-icons/tb");
import { HiOutlineLogout } from "react-icons/hi";
import { BsClipboardData } from "react-icons/bs";
import { BsBoxArrowLeft } from "react-icons/bs";

import default_profile_img from "public/img/default-user.png";

//helper
import { closeSideBar } from "@/helpers/toggleMobileView";

// context
// import UserContext from "../../contexts/UserContext";

const Sidebar = () => {
  // loaction
  const location = {};

  // current user
  // const { login } = useContext(UserContext);

  const [allowed, setAllowed] = useState(true);

  // useEffect(() => {
  //   if (location.pathname === "/" || location.pathname.includes("/404")) {
  //     setAllowed(false);
  //   } else {
  //     setAllowed(true);
  //   }
  // }, [location.pathname]);

  return (
    <>
      {/* <Auth /> */}
      {allowed && (
        <>
          <div id="sideBar" className="bg-white row-span-3  border-r-2 border-[#e3eaf4]  xl:w-auto xl:static xl:z-0 xl:block   w-[17em] fixed h-full z-10 hidden ">
            {/* heading */}
            <div className="flex  justify-between items-center py-[1.3rem] px-[2.1rem] mb-4">
              <Link href={"/dashboard"} className="text-xl text-black uppercase">Boostlancer</Link>
              <button className="xl:hidden"
                onFocus={() => {
                  document.querySelector('#sideBar')?.classList.add('hidden');
                }}>
                <BsBoxArrowLeft className="fill-[#5ecac3] stroke-[#5ecac3] text-[22px]"
                />
              </button>
            </div>

            {/* menu elements */}
            <ul className="flex flex-col justify-between gap-3">
              {/* login user box */}
              <Link href={"/account"} className="mb-3">
                <li className="grid grid-cols-[30px_1fr] items-center justify-center gap-[.7rem] border-b-2 border-[#e3eaf4] pb-[16px] mx-auto w-[187px]">
                  <div className="user-img">
                    <Image className="w-[30px] h-[30px] rounded-full" src={default_profile_img} alt="user image" />
                  </div>
                  <div className="user-details">
                    {/* <h3>{login?.user.name}</h3>
                    <p>Admin</p> */}
                    <p className="text-[15px] text-[#62656a] font-light">admin</p>
                  </div>
                </li>
              </Link>
              {/* separator */}
              <span className="seperator-element"></span>
              <Link href={"/dashboard"} className="border-l-4  py-2 px-7 focus:border-[#5ecac3] ">
                <li
                  className="flex flex-row items-center cursor-pointer text-md gap-[.9rem]"
                >
                  <AiOutlineHome className="fill-[#a5b4cb] stroke-[#a5b4cb] text-[22px]" />
                  <p>Dashboard</p>
                </li>
              </Link>
              <Link href={"#"} className="border-l-4 focus:border-[#5ecac3] py-2 px-7 ">
                <li
                  className="flex flex-row items-center cursor-pointer text-md gap-[.9rem]"
                >
                  <BsClipboardData className="fill-[#a5b4cb] stroke-[#a5b4cb] text-[22px]" />
                  <p>Billings</p>
                </li>
              </Link>
              <Link href={"/dashboard/change-password"} className="border-l-4  focus:border-[#5ecac3] py-2 px-7 ">
                <li
                  className="flex flex-row items-center cursor-pointer text-md gap-[.9rem]"
                >
                  <AiOutlineSetting className="fill-[#a5b4cb] stroke-[#a5b4cb] text-[22px]" />
                  <p>Change password</p>
                </li>
              </Link>

              {/* logout */}
              <Link href={"#"} className="border-l-4 py-2 px-7 focus:border-[#5ecac3]"  >
                <li
                  className="flex flex-row items-center cursor-pointer text-md gap-[.9rem]"
                >
                  <HiOutlineLogout className=" stroke-[#a5b4cb] text-[22px]" />
                  <p>Logout</p>
                </li>
              </Link>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
