"use client";

import { useEffect, useState } from "react";

function ChangePassword() {
    const [data, setData] = useState({ password: '', repeat_password: '' })

    const [isValid, setIsValid] = useState({ state: true, visiblbe: false })

    const handlePwd = (value: string) => {
        setData({ ...data, password: value })
    }

    const handleRepeatPwd = (value: string) => {
        setData({ ...data, repeat_password: value })
    }


    useEffect(() => {
        if (data.password && data.repeat_password) {
            if (data.password === data.repeat_password) {
                setIsValid({ state: true, visiblbe: false })
            } else {
                setIsValid({ state: false, visiblbe: true })
            }
        }
        if (data.password.length === 0 && data.repeat_password.length === 0) {
            setIsValid({ state: true, visiblbe: false })
        }
    }, [data.password, data.repeat_password])


    return (
        <>
            <div className="font-poppins flex justify-center items-center w-full h-auto mt-[100px]">
                <div className=" g-blue-600">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">Change password</h1>
                            <p className="text-sm text-muted-foreground">Save or update information</p>
                        </div>
                        <div className="grid gap-6">
                            <form>
                                <div className="grid gap-3">
                                    <div className="grid gap-1 relative">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only">Old password</label>
                                        <input type="password" className="flex h-9 w-full rounded-md border focus:border-boostlancer-light-grey bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1" id="password" placeholder="Old password" autoCorrect="off" />

                                        <span className="absolute inset-y-0 right-0 grid place-content-center pr-4 hover:cursor-pointer">
                                            <svg width="19" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 3 18 18" /><path fill="#8E8E93" fillRule="evenodd" d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.088 15.088 0 0 0-3.001 4.11 1.435 1.435 0 0 0 0 1.255 15.088 15.088 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15.06 15.06 0 0 0 2.145-3.21 1.435 1.435 0 0 0 0-1.255 15.086 15.086 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.83 10.83 0 0 0-2.808.363l11.474 11.475z" clipRule="evenodd" /></svg>
                                        </span>
                                    </div>
                                    <div className="grid gap-1 relative">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only">Password</label>
                                        <input type="password" onChange={(e) => { handlePwd(e.target.value) }} className="flex h-9 w-full rounded-md border focus:border-boostlancer-light-grey bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1" id="password" placeholder="password" autoCorrect="off" />

                                        <span className="absolute inset-y-0 right-0 grid place-content-center pr-4 hover:cursor-pointer">
                                            <svg width="19" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 3 18 18" /><path fill="#8E8E93" fillRule="evenodd" d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.088 15.088 0 0 0-3.001 4.11 1.435 1.435 0 0 0 0 1.255 15.088 15.088 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15.06 15.06 0 0 0 2.145-3.21 1.435 1.435 0 0 0 0-1.255 15.086 15.086 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.83 10.83 0 0 0-2.808.363l11.474 11.475z" clipRule="evenodd" /></svg>
                                        </span>
                                    </div>
                                    <div className="grid gap-1 relative">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only">Confirmation Password</label>
                                        <input  type="password" onChange={(e) => { handleRepeatPwd(e.target.value) }} className="flex h-9 w-full rounded-md border focus:border-boostlancer-light-grey bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1" id="password-confirmation" placeholder="password confirmation" autoCorrect="off" />

                                        <span className="absolute inset-y-0 right-0 grid place-content-center pr-4 hover:cursor-pointer">
                                            <svg width="19" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#8E8E93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 3 18 18" /><path fill="#8E8E93" fillRule="evenodd" d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.088 15.088 0 0 0-3.001 4.11 1.435 1.435 0 0 0 0 1.255 15.088 15.088 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15.06 15.06 0 0 0 2.145-3.21 1.435 1.435 0 0 0 0-1.255 15.086 15.086 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.83 10.83 0 0 0-2.808.363l11.474 11.475z" clipRule="evenodd" /></svg>
                                        </span>
                                    </div>
                                </div>

                                {!isValid.state && isValid.visiblbe ? <div className="mx-auto text-sm mt-4 text-red-500 flex justify-center "><span>Password do not match.</span></div> : null}

                                <button className="inline-flex mt-6 w-full items-center justify-center whitespace-nowrap rounded-md text-sm font-medium hover:cursor-pointer bg-[#5ecac3] text-white shadow h-9 px-4 py-2">Save information</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ChangePassword;