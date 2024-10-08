import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className="flex flex-row items-center space-x-3 cursor-pointer md:space-x-4">
      <img src="/images/favicon-32x32.png" className="w-7" alt="logo" />
      <div className="text-xl font-bold transition-all text-white">
        Paulo <span className="text-blue-500">Holanda</span>
      </div>
    </div>
  );
}
