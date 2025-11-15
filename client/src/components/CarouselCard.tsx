import Slider from "react-slick";
import Image from "next/image";
import { TypeServicesInfo } from "./Content";

import {motion} from "framer-motion";

export function CarouselCard( {service}: {service: TypeServicesInfo} ) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <motion.div className="md:h-[420px] max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 40}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 0.5}}
                  transition={{duration: 0.6, ease: "easeOut"}}
    >
            <Slider {...settings}>
              {service.images.map((img, idx) => (
                <div key={idx}
                >
                  <Image src={img} alt={`slide-${idx}`} className="w-full h-64 object-cover rounded"></Image>
                </div>
              ))}
            </Slider>
            <div className="mt-5">
              <h3 className="font-bold text-xl">{service.title}</h3>
              <p className="text-[14px] text-gray-500">{service.description}</p>
            </div>
    </motion.div>
  )
}