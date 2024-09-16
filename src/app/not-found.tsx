import Link from "next/link";
import React from "react";
import HomeLayout from "../components/HomeLayout";

type Props = {};

 const notFound = ({}: Props) => {
  return (
    <>
      

      <HomeLayout>
        <div className="flex flex-col items-center justify-center w-full h-full mt-32">
          <div className="text-[4rem] font-black tracking-tight">
            Not Found :(
          </div>
          <p className="text-gray-400">
          Sorry, but this page does not exist!
          </p>
          <Link href="/" passHref className="px-5 py-2 mt-8 font-bold border-2 rounded-md text-blue-500 border-blue-500">
              Back to Home
          </Link>
        </div>
      </HomeLayout>
    </>
  );
}
export default notFound;