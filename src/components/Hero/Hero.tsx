import Image from "next/image";
import convertion from "../../../public/export.png";
import oval from "../../../public/oval.png";
import { JoinList } from "../JoinList/joinList";

function Hero() {
    return (
        <>
            <section className="bg-boostlancer-light-grey">
                <div className="mx-auto lg:px-8 container px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-white md:text-xl  text-lg font-medium uppercase">
                            Boostlancer
                        </div>
                        <div className="flex items-center space-x-4 text-xs">
                            <button className="border border-white text-white uppercase rounded-full px-4 py-2 font-light">
                                Login
                            </button>
                            <button className="text-black bg-white uppercase rounded-full px-4 py-2 font-light">
                                Get early access
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto lg:px-8 container lg:mt-12 px-4 flex w-full gap-4">

                    <div className="flex flex-col justify-between gap-8 lg:gap- py-12 w-full">
                        <div className="text-white text-center lg:text-left flex flex-col gap-6 lg:gap-10 lg:max-w-[700px] xl:mx-0">
                            <h1 className="lg:text-5xl text-4xl font-semibold">
                                Automate your <br /> Upwork job search
                            </h1>
                            <p className="lg:text-lg text-cente  font-extralight lg:w-2/3">
                                Boostlancer automates your job search, generates custom cover
                                letters, and puts you ahead of the competition.
                            </p>
                            <div className="flex justify-center lg:justify-start w-full">
                                <div className="relative w-full md:w-2/3 flex items-center rounded-full bg-white shadow-md py-2">
                                    <svg
                                        className="w-6 h-6 mr-4  relative left-5"
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
                                        className="w-full rounded-none pl-6 pr-4 py-2 border-l border-transparent focus:border-transparent focus:ring-0 focus:outline-none bg-transparent text-black"
                                    />
                                    <button className=" absolute right-[10px] bg-boostlancer-dark-grey text-white text-xs font-semibold py-2 text-nowrap px-6 rounded-full">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>

                        <JoinList />
                    </div>


                    <div className="hidden lg:flex w-[500px] min-w-[500px] h-[500px] lg:justify-end"
                    >
                        <div className="relative bg-center bg-cover bg-no-repeat w-[500px] min-w-[500px] h-full g-blue-600"
                            style={{ backgroundImage: 'url("/hero-girl.png")' }}
                        >
                            <div className="absolute bottom-16 right-14">
                                <Image src={convertion} alt="Export" className="w-32 h-32" />
                            </div>
                            <div className="absolute top-0 left-10">
                                <Image src={oval} alt="Oval" className="w-52 h-52" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hero;