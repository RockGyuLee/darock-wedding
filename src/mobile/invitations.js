import React, { Fragment, useEffect, useRef, useState } from "react";
import img2019 from "../img/scrollImg/2019.jpeg";
import img2020 from "../img/scrollImg/2020.jpeg";
import img2021 from "../img/scrollImg/2021.jpeg";
import img2022 from "../img/scrollImg/2022.jpeg";
import img2023 from "../img/scrollImg/2023.jpeg";
import img2024 from "../img/scrollImg/2024.jpeg";
import img2025 from "../img/scrollImg/2025.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import rockgyu from "../img/personal/rock.jpeg";
import dayeon from "../img/personal/dayeon.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { DaCallModal, Modal, RockCallModal } from "../utils/modal";

const message = [
  " 처음 만난 봄날, 벚꽃 아래에서 우리는 웃고 있었습니다.",
  " 그때는 몰랐어요, 그 계절이 일곱 번이나 다시 찾아올 줄은",
  " 같은 자리에서, 같은 마음으로 늘 서로의 곁을 지켜온 우리.",
  " 이제 우리는 그 모든 시간의 대답으로 서로의 삶이 되기로 약속하였습니다.",
  " 일곱번 째 봄을 지나 풍성한 여름 녹음 속에서 부부로써 인연을 이어가려합니다.",
  " 평생 좋은 친구로, 사랑하는 연인으로 서로 아껴주고 사랑하며 살겠습니다.",
  " 소중한 여러분을 초대하오니 함께해 주시면 감사하겠습니다."
];



function convertChat(chat){

    if(chat === ' ' || chat === undefined){
        return '\u00A0'
    } 
    return chat
}
export function Invitations() {
    const imageList = [img2019, img2020, img2021, img2022, img2023, img2024, img2025];

    const containerRef = useRef(null);
    const [divWidth, setDivWidth ] = useState(0);
    const [isShowRockModal, setIsRockModal ] = useState(false);
    const [isShowDaModal, setIsDaModal ] = useState(false);

    useEffect(()=>{
      const textContainerRef = containerRef.current;
      if (!textContainerRef) return;

      setDivWidth(textContainerRef.offsetWidth)
    }, [])

    const charBoxSize = 24;
    const maxChars = Math.max(...message.map(m => m.length));

    const chatCol = parseInt((divWidth -16) / charBoxSize);
    const chatRow = Math.ceil(maxChars / chatCol);

    const chatList = chatRow * chatCol;

    const changeRockModal = (state) => {
      setIsRockModal(state)
    }

    const changeDaModal = (state) => {
      setIsDaModal(state)
    }

    return (
      <Fragment>
        <div ref={containerRef}>
          <div className="flex flex-col ">
              <div className="flex justify-center text-3xl text-orange-500 font-bold">
                  소중한 분들을 초대합니다
              </div>
              <div className="flex justify-center text-gray-400 text-xs border-b-2 pb-2">
                  우측으로 스크롤하면 이야기를 읽을 수 있어요.
              </div>
          </div>
          <div className="w-full items-center pt-2">
          <div className="relative" style={{  width: "100%", height: "100%" }}>
              <div className='swiper-button-prev absolute'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
              </div>
              <div >
                  <Swiper
                      pagination={{
                          dynamicBullets : true
                      }}
                      navigation={{
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev',
                      }}
                      modules={[Pagination, Navigation]}
                      spaceBetween={200}
                      slidesPerView={1}
                      className="h-[30rem]"
                  >
                      {imageList.map((img, index) => {
                          return (
                              <SwiperSlide key={index} className=" relative">
                                <div className="w-full h-2/3 flex justify-center absolute">
                                  <img src={img} alt={`Slide ${index}`} className=" object-cover" />
                                </div>
                                  <section className="px-2 h-1/3 pt-6 absolute bottom-4 w-full flex-col justify-center" >
                                      {/* {
                                        Array.from({ length : message[index].length}).map((_, idx) => (
                                          <span
                                            key={idx}
                                            className="text-sm font-bold"
                                            style={{
                                              display: 'inline-block',
                                              border: '1px solid #d12e2e',
                                              textAlign: 'center',
                                              width: `${charBoxSize}px`,
                                              height: `${charBoxSize}px`,
                                              marginBottom: '0.2rem',
                                            }}
                                          >
                                           {convertChat(message[index][idx])}  
                                          </span>
                                        ))
                                      } */}
                                      {Array.from({ length: chatList }).map((_, idx) => (
                                        <span
                                            key={idx}
                                            className="text-sm font-bold"
                                            style={{
                                              display: 'inline-block',
                                              border: '1px solid #d12e2e',
                                              textAlign: 'center',
                                              width: `${charBoxSize}px`,
                                              height: `${charBoxSize}px`,
                                              marginBottom: '0.2rem',
                                            }}
                                        >
                                          {convertChat(message[index][idx])}  
                                        </span>
                                      ))}
                                  </section>
                              </SwiperSlide>
                          )
                      })}
                  </Swiper>
              </div>
              
              <div className='swiper-button-next absolute'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
              </div>
          </div>
          <div className="py-12">
            <div className="w-full flex items-center ">
              <div className="w-1/2  h-full">
                    <img className="shadow-md" src={rockgyu} style={{
                      borderRadius : "10%"
                    }}/>
              </div>
              <div className="w-1/2  h-full flex justify-center">
                <div className=" flex-col ">
                      <div className="flex justify-center">이현곤 · 김은미의 장남</div>
                      <div className="flex justify-center font-bold">
                        락규
                      </div> 
                      <div 
                        className="mt-4 flex justify-center text-sm text-gray-400 border rounded-md cursor-pointer hover:border-purple-400 hover:text-purple-400"
                        onClick={()=> changeRockModal(true)}  
                      >연락하기</div>
                      <RockCallModal isShow={isShowRockModal} setIsShow={setIsRockModal}/>
                </div>
              </div>
            </div>
            <div className="w-full flex pt-8 items-center ">
              <div className="w-1/2  h-full flex justify-center">
                  <div className=" flex-col ">
                        <div className="flex justify-center">장정일 · 이진현의 장녀</div>
                        <div className="flex justify-center font-bold">
                          다연
                        </div>
                        <div className="mt-4 flex justify-center text-sm text-gray-400 border rounded-md cursor-pointer hover:border-purple-400 hover:text-purple-500"
                          onClick={()=> changeDaModal(true)}  
                        >연락하기</div>
                        <DaCallModal isShow={isShowDaModal} setIsShow={setIsDaModal}/>
                  </div>
              </div>
              <div className="w-1/2  h-full flex-col items-center">
                  <img className="shadow-md" src={dayeon} style={{
                    borderRadius : "10%"
                  }}/>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* <Modal isShow={isShowCallModal} setIsShow={setIsCallModal}/> */}
      </Fragment>
    
  );
}
