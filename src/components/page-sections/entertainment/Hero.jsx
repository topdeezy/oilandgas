import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import 'swiper/css/pagination';


import { EffectFade, Autoplay} from "swiper/modules";

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

function Hero() {
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
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[100svh] object-cover object-center"
              />
              <div className="absolute bg-black w-screen h-screen top-0 left-0 opacity-40"></div>
              <section className="absolute top-[50%] left-[50%] text-white translate-x-[-50%] translate-y-[-50%]">
              <p className="text-clash uppercase text-8xl font-bold tracking-widest py-5">Neowec</p>
                <p className="text-2xl lg:text-3xl uppercase text-clash tracking-wide text-center">
                  {item.name}
                </p>
                {/* <Link href={item.href}> */}
                <a href={item.href}>
                  <p className="border px-4 py-2 text-center w-[150px] mx-auto my-2 lg:my-5 hover:scale-110 ease duration-500 text-clash">
                    EXPLORE
                  </p>
                </a>
                {/* </Link> */}
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}

export default Hero;
