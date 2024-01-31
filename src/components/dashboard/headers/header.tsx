"use client";

import Link from "next/link";
import Image from "next/image";

import default_profile_img from "public/img/default-user.png";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

interface PageTitle {
  title: string;
}

const Header = ({ title }: PageTitle) => {

  return (
    <div
      className="mx-auto my-0 bg-white w-full h-[65px] flex items-center justify-center border-b-2 border-[#e3eaf4]">
      <div className="flex flex-row items-center justify-between w-full max-w-[100%] text-[#141736]">
        <div className="flex gap-2 items-center justify-center text-[22px]">
          <label
            htmlFor="openSidebar"
            id="openSidebar"
            className=" py-[.6rem] xl:hidden  bg-[#def4f1]  border-[#5ecac3] rounded-full cursor-pointer px-[.7rem] py-[.2rem] mr-2 transition-all duration-300	ease-in	"
          >
            <HiOutlineMenuAlt2 className="xl:hidden xl:text-white text-[1.2rem] text-[#5ecac3]"
              tabIndex={0}
              onFocus={() => {
                document.querySelector('#sideBar')?.classList.remove('hidden');
              }}

              onClick={() => {
                document.querySelector('#sideBar')?.classList.toggle('hidden');
              }}

              onBlur={() => {
                document.querySelector('#sideBar')?.classList.add('hidden');
              }}
            />
          </label>
          <h2 className="text-[20px] text-[#a5b4cb]">{title}</h2>
        </div>
        {/* new btn */}
        <div className="flex gap-4">

          <div
            className="dropdown dropdown-bottom dropdown-end relative">
            <label className="flex items-center justify-center text-[30px] cursor-pointer">
              <div className="w-full h-full flex items-center justify-center">
                <Image src={default_profile_img} alt="user image" className="w-[30px] h-[30px] rounded-full object-cover" />
              </div>

              <MdKeyboardArrowDown className="ml-[10px] focus-within:border-none focus:border-none"
                tabIndex={0}
                onFocus={(e) => {
                  e.stopPropagation()
                  document.querySelector("#indexNav")?.classList.add("hidden")
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  document.querySelector("#indexNav")?.classList.toggle("hidden")
                }}
              />
            </label>
            <ul id="indexNav"

              className=" gap-4 p-2 pl-3  rounded-md min-h-[110px]  dropdown-content menu shadow bg-base-100 rounded-box w-52  dropdown-content bg-white menu bg-base-100 border border-[#d8dce470] rounded-box  absolute z-10  bottom-0 right-0 top-[46px] origin-bottom hidden"
            >
              <li
                tabIndex={0}
                onFocus={(e) => {
                  e.stopPropagation()
                }}
                onClick={(e) => {
                  e.stopPropagation()
                }}
                className="w-full mb-2 mt-2 py-[.38rem] px-2 rounded-lg hover:bg-[#5ecac3] hover:transition hover:text-white hover:ease-in duration-300">
                <Link href={"#"} className='w-[100%] block'>My Account</Link>
              </li>
              <li tabIndex={0}
                onFocus={(e) => {
                  e.stopPropagation()
                }}
                onClick={(e) => {
                  e.stopPropagation()
                }}
                className="w-full py-[.38rem] px-2 rounded-lg hover:bg-[#5ecac3] hover:transition hover:text-white hover:ease-in duration-300">
                <Link href="#" className='w-[100%] block'>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
