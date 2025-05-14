import firstScreen2 from "../img/first_screen2.jpeg";

import React from "react";
import {  Invitations } from "./second";
import { WeddingGallery } from "./third";

export function Mobile({scrollY}){

    return <div className="w-full h-full">
        
        <div className="w-full h-full mb-8">
            <div className=" flex w-full  absolute items-center justify-center top-10 text-white font-bold text-2xl">
                <div className="flex-col w-12 relative">
                    <div className="flex justify-start">
                        08
                    </div>
                    <div className="flex justify-end">
                        30
                    </div>
                    <div className="absolute border w-16" style={{
                        top : "45%",
                        left : "-10%",
                        transform:`rotate(-0.60turn)`
                    }} />
                </div>
                <div className="ml-2">
                    우리 결혼 합니다.
                </div>
            </div>
            <img 
                style={{
                    width : '100%',
                    height: '85%'
                }}
                src={firstScreen2}
            />
            <div className="w-full flex items-center justify-center text-2xl font-bold mt-8" >
                <div className="flex-col">
                    <div>2025.08.30(토) 오전 11시</div>
                    <div>전주 더케이웨딩홀</div>
                </div>
            </div>
        </div>
        <Invitations scrollY={scrollY}/>
        <WeddingGallery />
    </div>
}