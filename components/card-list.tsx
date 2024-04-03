"use client";
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Card } from './card';

export const CardList = () => {
    return (
        <div >
            <Swiper slidesPerView={3.5} spaceBetween={30} style={{ paddingInline: 10 }}>
                <SwiperSlide >
                    <Card varient="expired" />
                </SwiperSlide>
                <SwiperSlide >
                    <Card varient="live" />
                </SwiperSlide>
                <SwiperSlide >
                    <Card varient="next" />
                </SwiperSlide>
                <SwiperSlide className='my-auto'>
                    <Card varient="later" />
                </SwiperSlide>
                <SwiperSlide >
                    <Card varient="expired" />
                </SwiperSlide>
                <SwiperSlide >
                    <Card varient="live" />
                </SwiperSlide>
                <SwiperSlide >
                    <Card varient="next" />
                </SwiperSlide>
                <SwiperSlide >
                    <Card varient="later" />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
