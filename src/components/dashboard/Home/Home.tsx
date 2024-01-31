import Link from "next/link";

// icons
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";


// helpers
import postReq from "@/helpers/postReq";

// react query
// import { useQuery } from "@tanstack/react-query";


const Home = () => {
  // get analytics
  // const handleAnalyticsLoading = async (e) => {
  //   // send req
  //   return await postReq({ home: "home" }, "/api/analytics");
  // };

  // const {
  //   data: analyticsData,
  //   isLoading: analyticsLoading,
  //   isError,
  //   isSuccess,
  // } = useQuery(["analytics"], handleAnalyticsLoading, {
  //   refetchOnWindowFocus: false,
  //   enabled: true,
  // });

  return (
    <>
      <div className="col-start-2  mx-full mt-[2.2rem]">
        <div className="  grid lg:gap-5  lg:grid-cols-4 sm:grid-cols-2  md:gap-7 md:justify-items-center gap-6   px-2">
          <Link href="/dashboard/account" className=" lg:w-full md:w-[80%] ">
            <div className="border-b-2 border-[#5ecac3] min-h-[100px] h-[100px] bg-white p-4 rounded-[10px] shadow-[0_10px_10px_10px_#8b8b8b13] grid grid-cols-[1fr_30px] items-center gap-4 w-full">
              <div className="text-[#141736] flex flex-col capitalize gap-[.3rem]">
                <p className="text-[15px] font-[700] text-[#141736]">Account</p>
                <p className=" text-[#141736] text-[13px] font-[300]">List of dashboard users</p>
              </div>
              <AiOutlineUser className="text-[30px] fill-[#141736] stroke-[#141736] rounded-[10px] shadow-[0_0_10px_10px_#8b8b8b13] rounded-1 bg-white" />
            </div>
          </Link>
          <Link href="#" className="lg:w-full md:w-[80%]">
            <div className="border-b-2 border-[#5ecac3] min-h-[100px] h-[100px] bg-white p-4 rounded-[10px] shadow-[0_10px_10px_10px_#8b8b8b13] grid grid-cols-[1fr_30px] items-center gap-4 w-full">
              <div className="text-[#141736] flex flex-col capitalize gap-[.3rem]">
                <p className="text-[15px] font-[700] text-[#141736]">Billings</p>
                <p className=" text-[#141736] text-[13px] font-[300]">Lorem ipsum do</p>
              </div>
              <AiOutlineSetting className="text-[30px] fill-[#141736] stroke-[#141736] rounded-[10px] shadow-[0_0_10px_10px_#8b8b8b13] rounded-1 bg-white" />
            </div>
          </Link>
          <Link href="/dashboard/change-password" className=" lg:w-full md:w-[80%] ">
            <div className="border-b-2 border-[#5ecac3] min-h-[100px] h-[100px] bg-white p-4 rounded-[10px] shadow-[0_10px_10px_10px_#8b8b8b13] grid grid-cols-[1fr_30px] items-center gap-4 w-full">
              <div className="text-[#141736] flex flex-col capitalize gap-[.3rem]">
                <p className="text-[15px] font-[700] text-[#141736]">Reset Password</p>
                <p className=" text-[#141736] text-[13px] font-[300]">Change your password</p>
              </div>
              <AiOutlineSetting className="text-[30px] fill-[#141736] stroke-[#141736] rounded-[10px] shadow-[0_0_10px_10px_#8b8b8b13] rounded-1 bg-white" />
            </div>
          </Link>
          <Link href="#" className=" lg:w-full md:w-[80%] ">
            <div className=" border-b-2 border-[#5ecac3] min-h-[100px] h-[100px] bg-white p-4 rounded-[10px] shadow-[0_10px_10px_10px_#8b8b8b13] grid grid-cols-[1fr_45px] items-center gap-4 w-full ">
              <div className="text-[#141736] flex flex-col capitalize gap-[.3rem]">
                <p className="text-[15px] font-[700] text-[#141736]">Logout</p>
                <p className=" text-[#141736] text-[13px] font-[300]">Logout from your current session</p>
              </div>
              <HiOutlineLogout className="text-[30px] stroke-[#141736] rounded-[10px] shadow-[0_0_10px_10px_#8b8b8b13] rounded-1 bg-white" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
