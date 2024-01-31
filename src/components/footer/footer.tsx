import { FaXTwitter, FaDribbble } from "react-icons/fa6";
import { FaInstagram, FaMediumM, FaBehance } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const Footer = () => {
  return (
    <footer className="bg-boostlancer-dark-grey pt-8 px-4 lg:px-0 duration-1000 font-poppins">
      <div className="container lg:px-16 mx-auto flex flex-col items-start pt-4 md:pt-8 pb-4 md:pb-6">
        <div className="flex flex-col gap-6 items-center text-center lg:text-left lg:gap-0 lg:flex-row lg:justify-between lg:items-start w-full pb-4 md:pb-6 border-b border-gray-700">
          <div className="flex flex-col w-full lg:w-1/3">
            <h2 className=" text-white text-[26px] font-bold uppercase tracking-wide mb-2">
              Boostlancer
            </h2>
            <p className="text-[15.5px] text-gray-200 font-extralight text-sm leading-[27px]">
              Candles us galleons snape knut trace. Snare side-along hedwig kittens silver cabinet wool. Candles us galleons snape knut trace. Snare side.
            </p>
          </div>

          <div className="relative flex items-center lg:justify-between border border-[#696871] rounded-full px-3 py-2">
            <CiMail className="w-6 h-8 ml-2 text-[#696871] stroke-current" viewBox="0 0 24 24 " />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="off"
              className="focus:outline-none bg-transparent text-gray-400 focus:ring-green-800 placeholder:text-sm focus:bg-transparent px-3 py-2 mr-4 border border-transparent focus:border-transparent focus:ring-0"
            />
            <button className="bg-boostlancer-light-grey text-xs lg:text-base rounded-full text-whitespace-nowrap text-white font-medium px-8 py-3 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800">
              Get Started
            </button>
          </div>
        </div>

        <div className="pt-8 w-full flex flex-col-reverse gap-2 lg:flex-row  items-center justify-between text-gray-200 text-xs font-light leading-5">
          <div className="text-[16px] flex items-center">
            <span>LitCollective © {new Date().getFullYear()}</span>
          </div>
          <div className="text-[16px] flex flex-wrap justify-center md:justify-end gap-4 ">
            <div className="flex items-center">
              <FaBehance />
              <span className="ml-2">Behance</span>
            </div>
            <div className="flex items-center">
              <FaDribbble />
              <span className="ml-2">Dribbble</span>
            </div>
            <div className="flex items-center">
              <FaXTwitter />
              <span className="ml-2">Twitter</span>
            </div>
            <div className="flex items-center">
              <FaInstagram />
              <span className="ml-2">Instagram</span>
            </div>
            <div className="flex items-center">
              <FaMediumM />
              <span className="ml-2">Medium</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
