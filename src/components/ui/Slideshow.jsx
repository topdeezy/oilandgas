"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

const images = [
  {
    img: "https://images.unsplash.com/photo-1552308643-1dc072dab3e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    name: "Artiste Management",
    href: "https://entertainment.neowec.com/artistmgt/",
  },
  {
    img: "https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name: "Photography",
    href: "https://entertainment.neowec.com/photography/",
  },
  {
    img: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name: "Event Management",
    href: "https://entertainment.neowec.com/eventmgt/",
  },
  {
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name: "Music",
    href: "https://entertainment.neowec.com/music/",
  },
];

function Slideshow() {
  return (
    <main>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        // pagination={true}
        className="mySwiper"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index} className="relative">
              <Image
                src={item.img}
                alt={item.name}
                width={5000}
                height={1000}
                className="w-full h-[30svh] object-cover"
              />
              <div className="absolute bg-black w-screen h-screen top-0 left-0 opacity-70"></div>
              <section className="absolute top-[50%] left-[0] text-white translate-y-[-50%] p-5">
                <h1 className="text-2xl md:text-3xl font-bold">
                  World-Class Solutions For Everyone.
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  earum possimus est? Magnam aut dignissimos totam omnis
                  excepturi. Voluptatum, itaque.
                </p>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}

export default Slideshow;
