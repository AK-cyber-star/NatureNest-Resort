import Image from "next/image";

import { motion } from "framer-motion";

import resortImg1 from "../../public/images/resort/img1.png";
import resortImg3 from "../../public/images/resort/img3.png";
import resortImg4 from "../../public/images/resort/img4.png";
import resortImg5 from "../../public/images/resort/img5.png";
import resortimg6 from "../../public/images/resort/img6.png";
import resortImg7 from "../../public/images/resort/img7.png";

export function PhotoGallery() {
  const photos = [resortImg1, resortImg3, resortImg4, resortImg5, resortimg6, resortImg7];

  return (
    <section className="mt-20 max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((src, index) => (
          <motion.div key={index} className="overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 40}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 0.5}}
                  transition={{duration: 0.6, ease: "easeOut"}}
          >
            <Image
              src={src}
              alt={`Gallery photo ${index + 1}`}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              width={500}
              height={350}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}