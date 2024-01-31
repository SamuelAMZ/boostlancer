"use client";

import { useState } from "react";

function UserDetail() {
    const [userData, setUserData] = useState({ name: "John", email: "doe@gmail.com" })

    const handleEmail = (value: string) => {
        setUserData({ ...userData, email: value })
    }

    const handleName = (value: string) => {
        setUserData({ ...userData, name: value })
    }
    return (
        <>
            <div className="font-poppins flex justify-center items-center w-full h-auto mt-[100px]">
                <div className=" g-blue-600">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">Account information</h1>
                            <p className="text-sm text-muted-foreground">Save or update information</p>
                        </div>
                        <div className="grid gap-6">
                            <form>
                                <div className="grid gap-3">
                                    <div className="grid gap-1">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only">Full name</label>
                                        <input value={userData.name} onChange={(e) => { handleName(e.target.value) }} type="text" className="flex h-9 w-full rounded-md border focus:border-[#5ecac3] bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1" id="fullname" placeholder="michel De Souza" autoComplete="name" autoCorrect="off" />
                                    </div>

                                    <div className="grid gap-1">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only">Email</label>
                                        <input value={userData.email} onChange={(e) => { handleEmail(e.target.value) }} type="email" className="flex h-9 w-full rounded-md border focus:border-[#5ecac3] bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1" id="email" placeholder="name@example.com" autoComplete="email" autoCorrect="off" />
                                    </div>
                                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium hover:cursor-pointer bg-[#5ecac3] text-white shadow h-9 px-4 py-2">Save information</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserDetail;