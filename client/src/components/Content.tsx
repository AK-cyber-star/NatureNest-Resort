"use client"

import {motion } from "framer-motion";

import { StaticImageData } from "next/image";

import accommadationImg1 from "../../public/images/accommadation/img1.png"
import accommadationImg2 from "../../public/images/accommadation/img2.png"
import accommadationImg3 from "../../public/images/accommadation/img3.png"
import adventureImg1 from "../../public/images/adventures/img1.png"
import adventureImg2 from "../../public/images/adventures/img2.png"
import adventureImg3 from "../../public/images/adventures/img3.png"
import wellnessImg1 from "../../public/images/wellness/img1.png"
import wellnessImg2 from "../../public/images/wellness/img2.png"
import wellnessImg3 from "../../public/images/wellness/img3.png"
import { CarouselCard } from "./CarouselCard";
import { PhotoGallery } from "./PhotoGallery";
import { useState } from "react";
import BookingFormModal from "@/src/components/BookingFormModal";

export type TypeServicesInfo = {
  images: StaticImageData[]; title: string;
  description: string;
}
const servicesInfo: TypeServicesInfo[] = [
  {
    images: [accommadationImg1, accommadationImg2, accommadationImg3],
    title: "Accommodation",
    description: "Enjoy cozy, elegant rooms and villas designed for your ultimate comfort and relaxation, surrounded by nature’s beauty."
  },
  {
    images: [adventureImg1, adventureImg2, adventureImg3],
    title: "Adventure Activities",
    description: "Experience thrilling outdoor adventures like hiking, kayaking, and zip-lining that bring excitement to your stay."
  },
  {
    images: [wellnessImg1, wellnessImg2, wellnessImg3],
    title: "Wellness & Spa",
    description: "Rejuvenate your mind and body with soothing spa treatments, yoga sessions, and holistic wellness programs."
  },
];

export default function Content() {
  
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  return (
    <section className="overflow-hidden">
    {/* Hero section */}
    <div className="relative h-[95vh] w-full bg-[url('../public/bg.png')] bg-no-repeat bg-cover bg-center flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-40" />
      <motion.div
        className="relative w-11/12 max-w-xl md:max-w-2xl text-white z-10 px-4 md:px-0 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-[#edf8ef] tracking-[4px] font-bold">
          NatureNest Resort
        </h1>
        <h2 className="text-lg md:text-xl text-green-50 tracking-[2px] mt-2">
          &quot;Escape to Serenity, Embrace Adventure&quot;
        </h2>
        <p className="text-xs md:text-sm text-green-100 mt-4 max-w-md md:max-w-screen-sm">
          Nestled in nature&apos;s embrace, NatureNest Resort offers a perfect blend of tranquil relaxation and exhilarating adventure. Surrounded by lush greenery, it’s a sanctuary where calm meets excitement—your ideal escape to luxury, comfort, and unforgettable experiences.
        </p>
        <button
        onClick={() => setIsBookingOpen(true)}
        className="mt-6 rounded-md px-6 py-3 w-full md:w-[200px] h-[50px] bg-[#a37f43] text-white cursor-pointer tracking-[4px]">
          BOOK NOW!
        </button>
        {isBookingOpen && <BookingFormModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />}
      </motion.div>
    </div>

    {/* Service section */}
    <div className="pt-20 min-h-[90vh] w-full bg-amber-50 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-6 md:gap-2">
        <motion.h2 
          className="text-3xl md:text-5xl tracking-[4px] text-center md:text-left"
          initial={{ x: -200, y: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Experience the Best
        </motion.h2>
        <motion.p 
          initial={{ x: 200, y: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="max-w-full md:max-w-[500px] text-center md:text-left text-sm md:text-base"
        >
          At NatureNest Resort, we offer a curated selection of services designed to enhance your stay. From luxurious{" "}
          <span className="font-bold tracking-[1px]">accommodations</span> crafted for ultimate comfort, thrilling{" "}
          <span className="font-bold tracking-[1px]">adventure activities</span> to invigorate your spirit, to holistic{" "}
          <span className="font-bold tracking-[1px]">wellness and spa</span> treatments that rejuvenate your body and mind — our offerings provide something special for every traveler seeking balance and excitement in nature.
        </motion.p>
      </div>

      <div className="mt-20 p-4 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesInfo.map((service, idx) => (
          <div key={idx}>
            <CarouselCard service={service}/>
          </div>
        ))}
      </div>
    </div>


    {/* Gallery section */}
    <div className="pt-20 w-full bg-amber-50 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-4 md:gap-2">
        <motion.p
          className="max-w-full md:max-w-[500px] text-center md:text-left text-sm md:text-base"
          initial={{ x: -200, y: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Explore breathtaking moments captured at NatureNest Resort. Our gallery showcases the stunning beauty, luxurious accommodations, thrilling adventures, and serene wellness experiences that await you. Let these images inspire your next unforgettable escape.
        </motion.p>
        <motion.h2
          initial={{ x: 200, y: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl tracking-[4px] text-center md:text-left"
        >
          Photo Gallery
        </motion.h2>
      </div>

      <PhotoGallery />
    </div>

    
    <div>
      
    </div>
    </section>
  )
}