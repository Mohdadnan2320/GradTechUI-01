import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {

    const detailes = [
        {
            image: "neeraj.png",
            name: "Neeraj Yadav",
            title: "Chief Executive Officer",
            description:
                "With 12 years of experience in the engineering sector, I have collaborated with top MNCs in India, honing my skills in project management, design, and implementation, and consistently delivering high-quality solutions.",
        },
        {
            image: "dp2.png",
            name: "Anshuman Yadav",
            title: "Chief operating officer",
            description:
                "Experienced operations manager with four years of expertise, adept in overseeing organizational processes and enhancing efficiency. Possesses three years of mentoring experience with college students, fostering their growth and development.",
        },
    ]

  return (
    <div className="w-full h-96 mt-5 p-5 md:h-max md:mt-10 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
  
      }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper cursor-grab"
        style={{
          "--swiper-pagination-color": "#FF5656",
          "--swiper-navigation-color": "#FF5656",
          }}
      >
        {detailes.map((item, index) =>{
            return (
                <SwiperSlide key={index} >
                <div className="w-4/6 h-full mx-auto md:p-5">
                        <div className="w-20 my-5 mx-auto rounded-full overflow-hidden 
                        md:w-36 lg:w-44">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="">
                            <p className="my-5 text-xs font-light text-[var(--color-white)] tracking-tighter md:text-lg md:font-medium lg:text-xl">{item.description}</p>
                            <h2 className="my-5 text-xs font-medium capitalize text-[var(--color-white)] md:text-base md:font-medium lg:text-lg"><span className=" font-semibold text-[var(--color-red)]" >{item.name}</span>, {item.title}</h2>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
