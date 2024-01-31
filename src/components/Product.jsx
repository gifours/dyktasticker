import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import dataProduct from '../data/product.json'

const Product = () => {

    const sliderSettings = {
        breakpoints: {
            480: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            750: {
                slidesPerView: 3
            },
            1100: {
                slidesPerView: 4
            }
        }
    }

    const SliderButtons = () => {
        const swiper = useSwiper();
        return(
            <div className="flex gap-2 justify-center p-4">
                <button className="buttonSwipe" onClick={()=> swiper.slidePrev()}>&lt;</button>
                <button className="buttonSwipe" onClick={()=> swiper.slideNext()}>&gt;</button>
            </div>
        );
    };

  return (
    <section className="pt-6">
        <div className="">
            <div className="relative overflow-hidden">
                <div className="p-4">
                    <p className=" text-xl lg:text-2xl font-semibold text-primary2">Best Seller</p>
                    <h1 className=" text-3xl lg:text-4xl font-bold text-dark">Popular Scotlet</h1>
                </div>
                
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {dataProduct.map((card) => (
                        <SwiperSlide className="p-4 cursor-pointer">
                            <div className=" bg-white shadow-lg rounded-xl  flex flex-col items-start p-4 max-w-max hover:shadow-sky-200  hover:scale-105 transition-all duration-300">
                                <img className="rounded-xl" src={card.imgproduct} alt="" />
                                <h1 className=" text-secondary text-xl font-semibold py-2"><span className="text-primary2">Rp.</span>{card.price}</h1>
                                <h2 className=" text-dark text-2xl font-bold pb-2">{card.name}</h2>
                                <p className="text-secondary">{card.detail}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            
            </div>
        </div>
    </section>
  )
}

export default Product