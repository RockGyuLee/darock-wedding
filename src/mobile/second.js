import React, { useState, useEffect, useRef } from "react";
import { useDidMountEffect } from "../utils/use";
import img2019 from "../img/scrollImg/2019.jpeg";
import img2020 from "../img/scrollImg/2020.jpeg";
import img2021 from "../img/scrollImg/2021.jpeg";
import img2022 from "../img/scrollImg/2022.jpeg";
import img2023 from "../img/scrollImg/2023.jpeg";
import img2024 from "../img/scrollImg/2024.jpeg";
import img2025 from "../img/scrollImg/2025.jpeg";

const message = [
    " 19년 봄, 새싹처럼 설레는 마음으로 만나 여섯 번의 봄을 함께 지나며 서로의 사랑을 조심스레 키워왔습니다.",
    "그 사랑이 결혼이라는 아름다운 결실로 이어져, 이제 새로운 시작 앞에 서게 되었습니다.",
    "햇살 고운 8월의 날, 소중한 분들을 모시고 이 기쁨을 함께 나누고자 합니다.",
    "따뜻한 발걸음으로 오셔서 저희의 첫 걸음을 밝혀주신다면 큰 기쁨이 되겠습니다."
]

/**
 * y = -1/50 * x + 21 
 * return 1 or 0 
 * 1000 ~ 1300 에서 메세지를 지워지는 함수.
 */
const updateFirstMessage = (scrollY) => {
//    let y =  (-(1/200) * scrollY) + 6;
   let y =  (-(1/300) * scrollY) + 4.333;
   return y;
}

// 1300 - 1600 에서 메세지를 보여주는 함수.
const ableSecondMessage = (scrollY) => {
    let y =  ((1/300) * scrollY) - 4.333;
   return y;
}

// 1900 - 2200 에서 메세지를 지워주는 함수.
const disableSecondMessage = (scrollY) => {
    let y =  (-(1/300) * scrollY) + 7.333;
   return y;
}

// 2200 - 2500 에서 메세지를 보여주는 함수.
const ableThirdMessage = (scrollY) => {
    let y =  ((1/300) * scrollY) - 7.333;
   return y;
}

// 2800 - 3100 에서 메세지를 지워주는 함수.
const disableThirdMessage = (scrollY) => {
    let y =  (-(1/300) * scrollY) + 10.333;
   return y;
}

// 3100 - 3400 에서 메세지를 보여주는 함수.
const ableFourthMessage = (scrollY) => {
    let y =  ((1/300) * scrollY) - 10.333;
   return y;
}


const isOpacityMessage = (updateMsg , scrollY) => {
    const isEnabled = updateMsg(scrollY);
    return Math.ceil(isEnabled) ? isEnabled : 0;
}

const isDisplayMessage = (updateMsg, scrollY) => {
    const isEnabled = updateMsg(scrollY);
    return Math.ceil(isEnabled) > 0 ? 'inline-block' : 'none';
}

let clientWidth = window.innerWidth;
clientWidth -= 14;
export function Invitations({scrollY}){
    const containerRef = useRef(null);
    const imageList = [img2019, img2020, img2021, img2022, img2023, img2024, img2025];
    
    const intervalTime = 3000;
    const widthAndHeight = 24;

    useDidMountEffect(() => {

        let clientWidth = window.innerWidth;
        clientWidth -= 16;
        // clientWidth -= ;

        const textLine = parseInt(clientWidth / widthAndHeight);
        let pTagMaxLine = 0;
        message.forEach(text => {
            const list = [...text];
            const pLineNum = Math.ceil(list.length/ textLine);
            if (pTagMaxLine < pLineNum){
                pTagMaxLine = pLineNum;
            }
        })

        let pTag =  containerRef.current.querySelectorAll("p");
        let pEle = pTag[0];

        for (let i = 0; i < pTagMaxLine; i++) {
            for (let ii = 0; ii < textLine; ii++){
                const span = document.createElement("span");
                span.style.display = 'inline-block'
                span.style.border = '1px solid #d12e2e'
                span.style.textAlign = 'center'
                span.style.width = `${widthAndHeight}px`;
                span.style.height = `${widthAndHeight}px`;
                span.style.marginBottom = '0.2rem';
                span.style.fontWeight="700";
                pEle.appendChild(span);
            }
        }

        // 첫번째 문장
        pEle.childNodes.forEach((span, idx) => {
            const div = document.createElement("div");
            let char = message[0][idx];
            div.id = 0;
            div.innerHTML = '&nbsp;';
            if (char === ' ') {
                div.innerHTML = '&nbsp;';
            } else if (char){
                div.textContent = char;
            } else {
                div.innerHTML = '&nbsp;';
            }
            span.appendChild(div)
        })

        // 두번째 문장
        pEle.childNodes.forEach((span, idx) => {
            const div = document.createElement("div");
            let char = message[1][idx];
            div.id = 1;
            div.style.display = 'none';
            div.innerHTML = '&nbsp;';
            if (char === ' ') {
                div.innerHTML = '&nbsp;';
            } else if (char){
                div.textContent = char;
            } else {
                div.innerHTML = '&nbsp;';
            }
            span.appendChild(div)
        })

        // 세번째 문장
        pEle.childNodes.forEach((span, idx) => {
            const div = document.createElement("div");
            let char = message[2][idx];
            div.id = 2;
            div.innerHTML = '&nbsp;';
            div.style.display = 'none';
            if (char === ' ') {
                div.innerHTML = '&nbsp;';
            } else if (char){
                div.textContent = char;
            } else {
                div.innerHTML = '&nbsp;';
            }
            span.appendChild(div)
        })

        // 네번째 문장
        pEle.childNodes.forEach((span, idx) => {
            const div = document.createElement("div");
            let char = message[3][idx];
            div.id = 3;
            div.style.display = 'none';
            div.innerHTML = '&nbsp;';
            if (char === ' ') {
                div.innerHTML = '&nbsp;';
            } else if (char){
                div.textContent = char;
            } else {
                div.innerHTML = '&nbsp;';
            }
            span.appendChild(div)
        })

    }, []);

    useDidMountEffect(() => {

        if(updateFirstMessage(scrollY) > 1) return;

        let pEle = containerRef.current.querySelectorAll("p")[0];
        if (!containerRef.current) return;


        // 첫번째 메세지에서 두번째 메세지 출력
        if ( (1000 <= scrollY) && (scrollY <= 1600)){
            pEle.childNodes.forEach((span, idx) => {
                // let opacityMethod = pTagMethod[idx].opacityMethod;
                const firstDiv = span.childNodes[0];
                firstDiv.style.opacity = isOpacityMessage(updateFirstMessage, scrollY);
                firstDiv.style.display = isDisplayMessage(updateFirstMessage, scrollY);

                const secondDiv = span.childNodes[1];
                secondDiv.style.opacity = isOpacityMessage(ableSecondMessage, scrollY);
                secondDiv.style.display = isDisplayMessage(ableSecondMessage, scrollY);
            })
        }

        // 두번째 메세지에서 세번째 메세지 출력
        if ( (1900 <= scrollY) && (scrollY <= 2500)){
            pEle.childNodes.forEach((span, idx) => {
                // let opacityMethod = pTagMethod[idx].opacityMethod;
                const secondDiv = span.childNodes[1];
                secondDiv.style.opacity = isOpacityMessage(disableSecondMessage, scrollY);
                secondDiv.style.display = isDisplayMessage(disableSecondMessage, scrollY);

                const thirdDiv = span.childNodes[2];
                thirdDiv.style.opacity = isOpacityMessage(ableThirdMessage, scrollY);
                thirdDiv.style.display = isDisplayMessage(ableThirdMessage, scrollY);
            })
        }

        // 세번째 메세지에서 네번째 메세지 출력
        if ( (2800 <= scrollY) && (scrollY <= 3400)){
            pEle.childNodes.forEach((span, idx) => {
                // let opacityMethod = pTagMethod[idx].opacityMethod;
                const thirdDiv = span.childNodes[2];
                thirdDiv.style.opacity = isOpacityMessage(disableThirdMessage, scrollY);
                thirdDiv.style.display = isDisplayMessage(disableThirdMessage, scrollY);

                const fourthDiv = span.childNodes[3];
                fourthDiv.style.opacity = isOpacityMessage(ableFourthMessage, scrollY);
                fourthDiv.style.display = isDisplayMessage(ableFourthMessage, scrollY);
            })
        }
       
    }, [scrollY]);
    

    return (
        <div>
            <div className="h-28 flex flex-col">
                <div className="flex justify-center text-3xl text-orange-500 font-bold">
                    " 우리 결혼합니다 "
                </div>
                <div className="flex justify-center text-gray-400 border-b-2 pb-2">
                    천천히 스크롤하면 이야기를 읽을 수 있어요.
                </div>
            </div>
            <div className=" w-full px-2 flex items-center">            
                <div className='main pb-4' >
                    <header className='main-header pt-4' >
                        <div ref={containerRef}>
                            <p style={{textAlign : "center" }}></p>
                        </div>
                        <AutoSlide images={imageList} intervalTime={intervalTime}/>
                    </header>
                </div>
            </div>
            <div className="mb-20">
                <div className="flex flex-col items-center">
                    <div className="flex items-center my-2">
                        <div className="text-xl">
                            이현곤
                        </div>
                        <div className="rounded w-1 h-1 bg-black mx-2" />
                        <div className="text-xl">
                            김은미
                        </div>
                        <div>
                            의 장남 
                        </div>
                        <div className="text-2xl ml-2 font-bold">
                            락규
                        </div>
                    </div>
                    <div className="flex items-center my-2">
                        <div className="text-xl">
                            장정일
                        </div>
                        <div className="rounded w-1 h-1 bg-black mx-2" />
                        <div className="text-xl">
                            이진현
                        </div>
                        <div>
                            의 장녀
                        </div>
                        <div className="text-2xl ml-2 font-bold">
                            다연
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
};


function AutoSlide({ images, intervalTime, }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const yearList = [2019,2020,2021,2022,2023,2024,2025]


    useEffect(() => { 
      const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, intervalTime);
  
      return () => clearInterval(intervalId);
    }, [currentIndex, images.length, intervalTime]);
  
    return (
      <div className="p-2 flex justify-center h-full">
        <img key={currentIndex} className="msMoves" src={images[currentIndex]} alt={`slide${currentIndex}`} />
        <div className="absolute text-3xl font-bold text-white right-0 px-2">
            {
                yearList[currentIndex]
            }
        </div>
      </div>
    );
  }