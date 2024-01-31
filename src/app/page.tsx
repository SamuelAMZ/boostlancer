import { Metadata } from 'next'

import Image from "next/image";

import { JoinList } from "@/components/JoinList/joinList";
import { Footer } from "@/components/footer/footer";
import { Services } from "@/components/home/services";
import { NotificationSection } from "@/components/home/notificationSection";
import { Features } from "@/components/home/features";
import { PricingSection } from "@/components/home/pricing";
import { GetAccess } from "@/components/home/getAccess";

import convertion from "../../public/export.png";
import oval from "../../public/oval.png";


export const metadata: Metadata = {
  title: 'My Page Title',
}


export default function Home() {
  return (
    <>
      <section className="bg-green-500  font-poppins">
        <div className="lg:px-16 mx-auto container px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white md:text-3xl  text-lg font-medium uppercase">
              Boostlancer
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-green-500 text-white  uppercase rounded-full px-4 py-2 font-light border border-current">
                Login
              </button>
              <button className="bg-white text-black uppercase border border-green-500 rounded-full px-4 py-2 font-light">
                Get early access
              </button>
            </div>
          </div>
        </div>

        <div className=" lg:px-16 mx-auto min-h-[650px] container px-4 grid grid-cols-1 justify-center xl:grid-cols-2 xl:justify-start gap-4">
          <div className="flex flex-col gap-14 justify-center">
            <div className="text-white flex flex-col justify-center gap-4  lg:max-w-[700px] mx-auto  xl:mx-0">
              <h1 className="xl:text-7xl  xl:text-start  md:text-5xl text-4xl  text-center font-semibold mb-4 xl:leading-[95px]  md:leading-[60px] leading-[50px]">
                Automate your Upwork job search
              </h1>
              <p className="xl:text-2xl text-xl  xl:text-start text-center   mb-8 md:max-w-[600px]  md:mx-auto  xl:mx-0">
                Boostlancer automates your job search, generates custom cover
                letters, and puts you ahead of the competition.
              </p>
              <div className=" relative   xl:max-w-[500px]  xl:mx-0 lg:max-w-[600px]  md:w-[60vw] w-[80vw]  mx-auto flex items-center rounded-full bg-white  shadow-md py-3">
                <svg
                  className="w-8 h-8 mr-4  relative left-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                >
                  <path
                    d="M2 2L11.5 10L21 2"
                    stroke="#001E00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="1"
                    y="1"
                    width="20"
                    height="16"
                    rx="2"
                    stroke="#001E00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full rounded-none pl-10 pr-4 py-2 border-l border-transparent focus:border-transparent focus:ring-0 focus:outline-none bg-transparent text-black"
                />
                <button className=" absolute right-[10px] bg-black text-white font-semibold py-3  text-nowrap w-[150px] rounded-full">
                  Get Started
                </button>
              </div>
            </div>
            <JoinList />
          </div>

          <div className="xl:block hidden   relative  bg-green-500 bg-no-repeat bg-cover  bg-hero-pattern bg-[-170px]">
            <div className="absolute bottom-[70px] right-[105px] transform -translate-y-1/2">
              <Image src={convertion} alt="Export" className="w-32 h-32" />
            </div>
            <div className="absolute bottom-[300px] left-[120px] transform -translate-y-1/2">
              <Image src={oval} alt="Oval" className="w-52 h-52" />
            </div>
          </div>
        </div>
      </section>

      <Services />
      <NotificationSection />
      <Features />
      <PricingSection />
      <GetAccess />
      <Footer />
    </>
  );
}
