'use client'

import { ReactNode } from 'react';

import Sidebar from "../dashboard/Sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div
                onClick={() => {
                    try {
                        document.querySelector("#indexNav")?.classList.add("hidden")
                    } catch (error) {
                        console.log(error)
                    }
                }}
                className="grid xl:grid-cols-[16rem_1fr]  min-h-screen">
                <Sidebar />
                <div className="w-[94%] mx-auto min-h-screen overflow-hidden">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;



