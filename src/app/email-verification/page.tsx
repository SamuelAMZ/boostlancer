import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";
import React from "react";

function CheckEmail() {
    return (
        <>
            <section className="bg-boostlancer-dark-grey font-poppins h-screen">
                <NavBar />
                <div className="flex justify-center mt-12 w-full">
                    <div className="w-1/3 flex flex-col items-center gap-5 text-white text-center text-xs">
                        <span className="flex justify-center items-end overflow-hidden h-54 w-54 rounded-full bg-boostlancer-light-grey">
                            <svg className="translate-y-6" width="200" height="200" viewBox="0 0 284 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2347_451)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M248.305 120.035H11.6445L129.977 50.2797L248.305 120.035Z" fill="#1165EF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M248.305 120.035H11.6445L129.977 189.786L248.305 120.035Z" fill="#1165EF" />
                                    <path d="M192.124 24.0863H68.9958C56.3549 24.0863 46.1074 34.3205 46.1074 46.9451V194.348C46.1074 206.972 56.3549 217.207 68.9958 217.207H192.124C204.765 217.207 215.012 206.972 215.012 194.348V46.9451C215.012 34.3205 204.765 24.0863 192.124 24.0863Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M248.306 120.035L129.979 189.79L248.306 259.546V120.035Z" fill="#5CC5F9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M129.977 189.791L11.6445 259.546H248.305L129.977 189.791Z" fill="#1165EF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6445 120.035L129.977 189.79L11.6445 259.546V120.035Z" fill="#5CC5F9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.2051 55.673H188.912V60.5637H72.2051V55.673Z" fill="#9CA3AF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.2051 71.5242H188.912V76.4149H72.2051V71.5242Z" fill="#9CA3AF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.2051 87.3755H188.912V92.2614H72.2051V87.3755Z" fill="#9CA3AF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.2051 103.222H188.912V108.113H72.2051V103.222Z" fill="#9CA3AF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.2051 119.073H123.072V123.964H72.2051V119.073Z" fill="#9CA3AF" />
                                    <path d="M236.624 170.73C259.487 170.73 278.022 152.22 278.022 129.386C278.022 106.553 259.487 88.0425 236.624 88.0425C213.761 88.0425 195.227 106.553 195.227 129.386C195.227 152.22 213.761 170.73 236.624 170.73Z" fill="#001E00" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M258.026 108.195L263.872 114.033L233.125 144.74L233.033 144.832L232.007 145.856L230.923 146.939L229.776 148.084L228.562 149.297L227.279 150.578L226.011 149.312L224.836 148.137L223.756 147.06L222.76 146.064L221.85 145.156L221.434 144.74L209.375 132.697L215.22 126.859L227.279 138.902L258.026 108.195Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2347_451">
                                        <rect width="284" height="250" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>


                        <h2 className="text-xl font-semibold">Check your email</h2>
                        <p className="text-xs">We just emailed you a magic link to sign in to Applypass. Please check your inbox and click the link to log in.</p>
                        <span className="bg-boostlancer-light-grey rounded-full py-3 px-8 text-center font-semibold hover:cursor-pointer">Open email app</span>
                        <Link href="/signin" className="text-boostlancer-light-grey">Back to login</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CheckEmail;
