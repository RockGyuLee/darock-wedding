
// Refactored Invitations Component without createElement/appendChild
import React, { useEffect, useRef } from "react";
import { useDidMountEffect } from "../utils/use";
import img2019 from "../img/scrollImg/2019.jpeg";
import img2020 from "../img/scrollImg/2020.jpeg";
import img2021 from "../img/scrollImg/2021.jpeg";
import img2022 from "../img/scrollImg/2022.jpeg";
import img2023 from "../img/scrollImg/2023.jpeg";
import img2024 from "../img/scrollImg/2024.jpeg";
import img2025 from "../img/scrollImg/2025.jpeg";

const test = [
  " 2019년 봄, 따뜻한 햇살처럼 설레는 마음으로 저희는 처음 만나 서로에게 조금씩 물들어갔습니다.",
  "그 후 여섯 번의 봄을 함께 지나며 매 순간을 소중히 여기고 조심스레 사랑을 키워왔습니다.",
  "그 사랑이 어느새 단단해져 결혼이라는 아름답고 뜻깊은 결실로 이어졌습니다.",
  "이제 저희는 설렘과 감사의 마음으로 인생의 새로운 시작 앞에 서게 되었습니다.",
  "따사로운 햇살이 가득한 8월의 어느 날, 가장 소중한 분들을 모시고 저희의 기쁨을 함께 나누고 싶습니다.",
  "그날의 순간들이 저희 두 사람에게 오래도록 기억될 수 있도록 축복의 마음을 나눠주세요.",
  "바쁘시더라도 따뜻한 발걸음으로 함께해 주신다면 저희의 첫 걸음을 밝혀주는 큰 기쁨이 될 것입니다."
];


const message = [
  " 19년 봄, 새싹처럼 설레는 마음으로 만나 여섯 번의 봄을 함께 지나며 서로의 사랑을 조심스레 키워왔습니다.",
  "그 사랑이 결혼이라는 아름다운 결실로 이어져, 이제 새로운 시작 앞에 서게 되었습니다.",
  "햇살 고운 8월의 날, 소중한 분들을 모시고 이 기쁨을 함께 나누고자 합니다.",
  "따뜻한 발걸음으로 오셔서 저희의 첫 걸음을 밝혀주신다면 큰 기쁨이 되겠습니다."
];

const getOpacityFn = (slope, intercept) => scrollY => Math.max(0, Math.min(1, slope * scrollY + intercept));

const opacityFns = [
  getOpacityFn(-1 / 300, 4.333),     // fade out first
  getOpacityFn(1 / 300, -4.333),     // fade in second
  getOpacityFn(-1 / 300, 7.333),     // fade out second
  getOpacityFn(1 / 300, -7.333),     // fade in third
  getOpacityFn(-1 / 300, 10.333),    // fade out third
  getOpacityFn(1 / 300, -10.333)     // fade in fourth
];

const getMessageOpacities = (scrollY) => {
  const opacities = Array(4).fill(0);
  opacities[0] = opacityFns[0](scrollY);
  if (scrollY > 1000) opacities[1] = Math.min(opacityFns[1](scrollY), opacityFns[2](scrollY));
  if (scrollY > 1900) opacities[2] = Math.min(opacityFns[3](scrollY), opacityFns[4](scrollY));
  if (scrollY > 2800) opacities[3] = opacityFns[5](scrollY);
  return opacities;
};

export function Invitations({ scrollY }) {
  const imageList = [img2019, img2020, img2021, img2022, img2023, img2024, img2025];
  const intervalTime = 3000;

  const clientWidth = window.innerWidth - 16;
  const charBoxSize = 24;
  const charsPerLine = Math.floor(clientWidth / charBoxSize);
  const maxChars = Math.max(...message.map(m => m.length));

  const paddedMessages = message.map(msg => {
    const padded = msg.padEnd(maxChars, ' ');
    return padded.split("");
  });

  const opacities = getMessageOpacities(scrollY);

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
      <div className="w-full px-2 flex items-center">
        <div className="main pb-4">
          <header className="main-header pt-4">
            <div  className="flex flex-wrap justify-center">
              <p style={{ textAlign: "center", whiteSpace: "pre-wrap" }}>
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
                    {paddedMessages.map((line, lineIdx) => (
                      <div
                        key={lineIdx}
                        style={{
                          opacity: opacities[lineIdx],
                          display: opacities[lineIdx] > 0 ? 'block' : 'none',
                        }}
                      >
                        {line[idx] === ' ' ? '\u00A0' : line[idx]}
                      </div>
                    ))}
                  </span>
                ))}
              </p>
              <AutoSlide images={imageList} intervalTime={intervalTime} />
            </div>
          </header>
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

function AutoSlide({ images, intervalTime }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const yearList = [2019, 2020, 2021, 2022, 2023, 2024, 2025];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(intervalId);
  }, [images.length, intervalTime]);

  return (
    <div className="p-2 flex justify-center h-full relative">
      <img
        key={currentIndex}
        className="msMoves"
        src={images[currentIndex]}
        alt={`slide${currentIndex}`}
      />
      <div className="absolute text-3xl font-bold text-white right-0 px-2">
        {yearList[currentIndex]}
      </div>
    </div>
  );
}

  