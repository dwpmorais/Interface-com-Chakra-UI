import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlideItem } from './slideItem'

export function Slider ()  {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      pagination={true}
      loop={true}
      modules={[Navigation, Pagination]}
      className="sliderCountryHome"
    >
      <SwiperSlide>
        <SlideItem image_bg="./images/continentes/europa.jpg" title="Europa" subtitle="O Continente mais antigo"  />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem image_bg="./images/continentes/africa.jpg" title="Africa" subtitle="Aventuras selvagens"  />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem image_bg="./images/continentes/oceania.jpg" title="Oceania" subtitle=" Litorais paradisíacos e cidades modernas"  />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem image_bg="./images/continentes/eua.jpg" title="EUA" subtitle="Magia, Compras e muito mais"  />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem image_bg="./images/continentes/america-sul.jpg" title="America do Sul" subtitle="Belezas Naturais"  />
      </SwiperSlide>

    </Swiper>
  )
}