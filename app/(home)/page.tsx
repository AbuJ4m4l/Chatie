"use client";
import { motion } from "framer-motion";
import { moderniz } from "@/config/fonts";
import Chatie from "@/components/Chatie";
import HandLineAnimation from "@/components/HandLineAnimation";
import Image from "next/image";
import React from "@/components/React";
import AbuJamal from "@/components/AbuJamal";

export default function Home() {
  return (
    <>
      <div className="flex-col md:flex-row">
        <div>
          <div className="flex justify-start ml-20">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={`${moderniz.className}`}
            >
              chat, hang out, talk. with
            </motion.h1>
          </div>
          <div className="flex justify-start ml-20">
            <Chatie />
            <HandLineAnimation />
          </div>
        </div>
        <div className="flex justify-end mt-[150px] md:-mt-20">
          <motion.img
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="/img/Chatie Interface.png"
            width="500px"
          />
        </div>
      </div>
      <div className="flex justify-center mt-[200px]">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className={`${moderniz.className} text-2xl`}
        >
          Created with
        </motion.h1>
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          src="/img/react.png"
          width={200}
          height={200}
          alt="React Logo"
        />
      </div>
      <div className="flex justify-center">
        <React />
      </div>
      <div className="flex justify-center mt-[100px]">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          className={`${moderniz.className} text-2xl`}
        >
          By
        </motion.h1>
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          src="/img/AbuJamal-Avatar.jpg"
          width={200}
          height={200}
          alt="React Logo"
          className="rounded-full mt-2"
        />
      </div>
      <div className="flex justify-center mt-2">
        <AbuJamal />
      </div>
    </>
  );
}
