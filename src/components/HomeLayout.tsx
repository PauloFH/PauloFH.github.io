import React from "react";
import Header from "./Header";
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="relative">
        <main className="flex-1">{children}</main>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
