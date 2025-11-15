"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import avatarImg1 from "../../public/images/avatar/img1.png";
import avatarImg2 from "../../public/images/avatar/img2.png";
import avatarImg3 from "../../public/images/avatar/img3.png";
import avatarImg4 from "../../public/images/avatar/img4.png";

type Testimonial = {
  id: number;
  name: string;
  avatar: StaticImageData;
  review: string;
  position: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    avatar: avatarImg2,
    review: "An unforgettable experience! The resort was peaceful and full of adventure.",
    position: "Travel Blogger",
    rating: 4,
  },
  {
    id: 2,
    name: "John Smith",
    avatar: avatarImg1,
    review: "A perfect getaway with amazing service and beautiful surroundings.",
    position: "Photographer",
    rating: 3,
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar: avatarImg3,
    review: "The spa and wellness treatments were top-notch—a true rejuvenation.",
    position: "Wellness Coach",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Stevens",
    avatar: avatarImg4,
    review: "Exceptional service and breathtaking views. NatureNest Resort truly exceeded all my expectations.",
    position: "Entrepreneur",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden mt-20 px-4 max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl tracking-[4px] text-center w-full max-w-3xl">
        View what our customer&apos;s say
      </h2>
      <motion.div
        className="mt-10 flex gap-6 justify-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
          <div
            key={idx}
            className="flex flex-col shadow-lg gap-3 rounded-xl justify-center items-center p-6 bg-white max-w-xs min-w-[280px]"
          >
            <div className="w-20 h-20 overflow-hidden rounded-full">
              <Image
                src={testimonial.avatar}
                alt={`testimonial-image-${testimonial.id}`}
                className="object-cover"
                width={80}
                height={80}
              />
            </div>

            <p className="italic text-[14px] px-4 text-center min-w-[260px]">{`"${testimonial.review}"`}</p>
            <div className="text-yellow-400 text-center">
              {"★".repeat(testimonial.rating) + "☆".repeat(5 - testimonial.rating)}
            </div>
            <h3 className="font-bold text-lg text-center">{testimonial.name}</h3>
            <p className="text-[12px] text-center">{testimonial.position}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
