import React, { useEffect, useRef } from "react";
import img2019 from "../img/scrollImg/2019.jpeg";
import img2020 from "../img/scrollImg/2020.jpeg";
import img2021 from "../img/scrollImg/2021.jpeg";
import img2022 from "../img/scrollImg/2022.jpeg";
import img2023 from "../img/scrollImg/2023.jpeg";
import img2024 from "../img/scrollImg/2024.jpeg";
import img2025 from "../img/scrollImg/2025.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const message = [
  " 2019년 봄, 따뜻한 햇살처럼 설레는 마음으로 저희는 처음 만나 서로에게 조금씩 물들어갔습니다.",
  "그 후 여섯 번의 봄을 함께 지나며 매 순간을 소중히 여기고 조심스레 사랑을 키워왔습니다.",
  "그 사랑이 어느새 단단해져 결혼이라는 아름답고 뜻깊은 결실로 이어졌습니다.",
  "이제 저희는 설렘과 감사의 마음으로 인생의 새로운 시작 앞에 서게 되었습니다.",
  "따사로운 햇살이 가득한 8월의 어느 날, 가장 소중한 분들을 모시고 저희의 기쁨을 함께 나누고 싶습니다.",
  "그날의 순간들이 저희 두 사람에게 오래도록 기억될 수 있도록 축복의 마음을 나눠주세요.",
  "바쁘시더라도 따뜻한 발걸음으로 함께해 주신다면 저희의 첫 걸음을 밝혀주는 큰 기쁨이 될 것입니다."
];

/**
 * 1050 -> 1550
 * 1550
 */

const getTranslateXFn = (scroll, x) => {
    return -(scroll - x)
}

/**
 * 1550부터 1750까지는 정지.
 * @param {*} x
 * @returns 
 */
function getScoreAdjustment(scroll, x1, x2) {
    if (scroll < x1) {
        return x1 - scroll;
    } else if (scroll <= x2) {
        return 0;
    } else {
        return -(scroll - x2);
    }
}

function computeValue(x) {

    return -Math.max(0, x - 1140);
}

function isDisplayNone(x){
    if(x <-410 ) return 'none';
}

function convertChat(chat){

    if(chat === ' ' || chat === undefined){
        return '\u00A0'
    } 
    return chat
}
export function Invitations({ scrollY }) {
    const imageList = [img2019, img2020, img2021, img2022, img2023, img2024, img2025];

    const charBoxSize = 24;
    const maxChars = Math.max(...message.map(m => m.length));

    const chatCol = parseInt((window.innerWidth -14) / charBoxSize);
    const chatRow = Math.ceil(maxChars / chatCol)

    const chatList = chatRow * chatCol;

    console.log("chatList", chatList, chatRow, chatCol )

    return (
    <div className="">
        <div className="h-28 flex flex-col ">
            <div className="flex justify-center text-3xl text-orange-500 font-bold">
                " 우리 결혼합니다 "
            </div>
            <div className="flex justify-center text-gray-400 border-b-2 pb-2">
                천천히 스크롤하면 이야기를 읽을 수 있어요.
            </div>
        </div>
        <div className="w-full items-center">
        <div className="relative" style={{  width: "100%", height: "100%" }}>
            <div className='swiper-button-prev absolute'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            </div>
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
            >
                {imageList.map((img, index) => {
                    
                    return (
                        <SwiperSlide key={index}>
                            <section className="px-2" >
                                {Array.from({ length: chatList }).map((_, idx) => (
                                    <span
                                        key={idx}
                                        style={{
                                        display: 'inline-block',
                                        border: '1px solid #d12e2e',
                                        textAlign: 'center',
                                        width: `${charBoxSize}px`,
                                        height: `${charBoxSize}px`,
                                        marginBottom: '0.2rem',
                                        fontWeight: 700
                                        }}
                                    >
                                        {convertChat(message[index][idx])}
                                </span>
                                ))}
                            </section>
                            <img src={img} alt={`Slide ${index}`} className="w-full h-auto" />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className='swiper-button-next absolute'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </div>
        </div>
        {/* <HorizontalScrollSection /> */}
        <div style={{ height: "300vh", background: "#ddd" }}>
          <h2>가로 스크롤 후 다시 세로 콘텐츠</h2>
        </div>
      </div>
      {/* <div className="mb-20">
        <div className="flex flex-col items-center">
          <div className="flex items-center my-2">
            <div className="text-xl">이현곤</div>
            <div className="rounded w-1 h-1 bg-black mx-2" />
            <div className="text-xl">김은미</div>
            <div>의 장남</div>
            <div className="text-2xl ml-2 font-bold">락규</div>
          </div>
          <div className="flex items-center my-2">
            <div className="text-xl">장정일</div>
            <div className="rounded w-1 h-1 bg-black mx-2" />
            <div className="text-xl">이진현</div>
            <div>의 장녀</div>
            <div className="text-2xl ml-2 font-bold">다연</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
const HorizontalScrollSection = () => {

    const imgList = [img2019, img2020, img2021, img2022, img2023, img2024, img2025]

    const wrapperRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const TRIGGER_START = 1100; // 스크롤 트리거 시작 지점 (px)

    const charBoxSize = 24;
    const maxChars = Math.max(...message.map(m => m.length));
  
    useEffect(() => {
      const wrapper = wrapperRef.current;
      const scrollContainer = scrollContainerRef.current;
      if (!wrapper || !scrollContainer) return;
  
      const horizontalScrollLength = wrapper.scrollWidth - window.innerWidth;
      const verticalScrollLength = window.innerHeight + horizontalScrollLength;
  
      // 전체 스크롤 높이 설정
      scrollContainer.style.height = `${TRIGGER_START + horizontalScrollLength}px`;
  
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        console.log("scrollTop",scrollTop)
        console.log("TRIGGER_START",TRIGGER_START)
        console.log("horizontalScrollLength",horizontalScrollLength)
        if (scrollTop >= TRIGGER_START && scrollTop <= TRIGGER_START + horizontalScrollLength) {
            console.log("tt")
          const scrollX = scrollTop - TRIGGER_START;
          wrapper.scrollLeft = scrollX;
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div ref={scrollContainerRef} style={{ position: "relative" }}>
        {/* 가로 스크롤 영역 */}
        <div
          ref={wrapperRef}
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", width: "100%", height: "100%" }}>
            {
                imgList.map((img, idx)=> (
                    <section className="px-4 pt-2" style={{ flex: "0 0 100vw" }}>
                        {Array.from({ length: maxChars }).map((_, idx) => (
                            <span
                                key={idx}
                                style={{
                                display: 'inline-block',
                                border: '1px solid #d12e2e',
                                textAlign: 'center',
                                width: `${charBoxSize}px`,
                                height: `${charBoxSize}px`,
                                marginBottom: '0.2rem',
                                fontWeight: 700
                                }}
                            >
                   
                    </span>
                    ))}
                    {/* {
                    message[idx]
                    } */}
                    <img
                        className="msMoves"
                        src={img}
                    />
                    </section>
                ))
            }
            
            {/* <section style={{ flex: "0 0 100vw", background: "#6a0572", color: "#fff" }}>섹션 2</section>
            <section style={{ flex: "0 0 100vw", background: "#0f4c75", color: "#fff" }}>섹션 3</section>
            <section style={{ flex: "0 0 100vw", background: "red", color: "#fff" }}>섹션 4</section>
            <section style={{ flex: "0 0 100vw", background: "white", color: "#fff" }}>섹션 5</section>
            <section style={{ flex: "0 0 100vw", background: "blue", color: "#fff" }}>섹션 6</section>
            <section style={{ flex: "0 0 100vw", background: "#0f4c75", color: "#fff" }}>섹션 7</section> */}

          </div>
        </div>
  
        {/* 이후 영역 */}
        
      </div>
    );
};

