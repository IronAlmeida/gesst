import React from "react";
import Slider from "react-slick";

export default function slideClients (){
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    };

    return (
        <section className='bg-[#f0f0f0] py-14 px-4 w-full'>
            <h2 className='text-3xl text-[#00578e] text-center font-bold'>Empresas que confiam em nosso trabalho</h2>
            <Slider {...settings}>
                <div className="w-full bg-yellow-500 py-16">
                    <h2>2</h2>
                </div>
                <div className="w-full bg-blue-500 py-16">
                    <h2>2</h2>
                </div>
            </Slider>
        </section>
    )
}
