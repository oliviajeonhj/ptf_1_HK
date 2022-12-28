import swiperDBjson from '../json/swipers.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper';

const Swipers = (props) => {
    const swiperinfo = swiperDBjson[props.section];

      return(
        <Swiper id={props.contentid}
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        breakpoints={{
          768:{
            slidesPerView: props.view2           
            },
          1024:{
            slidesPerView: props.view1
            }
        }}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ 
          delay: props.delay,
          disableOnInteraction: false,
        }}
        loop = {true} 
        scrollbar={{ draggable: true }}
        onSlideChange={() => {
          //슬라이드가 끝나고 실행
        }}
        onSwiper={(swiper) => console.log(swiper)}
         >
          {
            swiperinfo.map( ( item, index ) => {
                   return(
                    
                    <SwiperSlide className={item.slidecls} key={'swp'+index} style={{backgroundImage:item.bgImg}}></SwiperSlide>
                   )
              }
            )
            
          }
        </Swiper>
      )
  }
  
  export default Swipers;