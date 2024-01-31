"use client";

import Home from "@/components/dashboard/Home/Home";
import Header from "@/components/dashboard/headers/header";

export default function Dashboard() {
  return (
    <>
      <Header title={"Home"} />
      <Home />
    </>
  );
}
