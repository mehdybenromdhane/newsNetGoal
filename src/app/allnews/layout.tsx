"use client";
import Header from "@/components/news/Header";
import Navbar from "@/components/news/Navbar";
import RandomNews from "@/components/news/RandomNews";
import TopHeadlines from "@/components/news/TopNews";

import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto ">
      <Header />
      <Navbar />

      <div className="lg:flex  lg:justify-between  ">

     
        {children}
     

        <RandomNews />
       
      </div>
    </div>
  );
}
