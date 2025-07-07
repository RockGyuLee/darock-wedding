
import img1_lg from "../img/gallery1/IMG_1_lg.jpg";
import img1_sm from "../img/gallery1/IMG_1_sm.jpg";
import img1_xs from "../img/gallery1/IMG_1_xs.jpg";

import img2_lg from "../img/gallery1/IMG_2_lg.jpg";
import img2_sm from "../img/gallery1/IMG_2_sm.jpg";
import img2_xs from "../img/gallery1/IMG_2_xs.jpg";

import img3_lg from "../img/gallery1/IMG_3_lg.jpg";
import img3_sm from "../img/gallery1/IMG_3_sm.jpg";
import img3_xs from "../img/gallery1/IMG_3_xs.jpg";

import img4_lg from "../img/gallery1/IMG_8_lg.jpg";
import img4_sm from "../img/gallery1/IMG_8_sm.jpg";
import img4_xs from "../img/gallery1/IMG_8_xs.jpg";

import img5_lg from "../img/gallery1/IMG_2916.JPG";
import img5_sm from "../img/gallery1/IMG_2916.JPG";
import img5_xs from "../img/gallery1/IMG_2916.JPG";

import img6_lg from "../img/gallery1/IMG_13_lg.jpg";
import img6_sm from "../img/gallery1/IMG_13_sm.jpg";
import img6_xs from "../img/gallery1/IMG_13_xs.jpg";

import img7_lg from "../img/gallery1/IMG_14_lg.jpg";
import img7_sm from "../img/gallery1/IMG_14_sm.jpg";
import img7_xs from "../img/gallery1/IMG_14_xs.jpg";

import img8_lg from "../img/gallery1/IMG_11_lg.jpg";
import img8_sm from "../img/gallery1/IMG_11_sm.jpg";
import img8_xs from "../img/gallery1/IMG_11_xs.jpg";

import img9_lg from "../img/gallery1/IMG_2924.JPG";
import img9_sm from "../img/gallery1/IMG_2924.JPG";
import img9_xs from "../img/gallery1/IMG_2924.JPG";

import img10_lg from "../img/gallery1/IMG_20_lg.jpg";
import img10_sm from "../img/gallery1/IMG_20_sm.jpg";
import img10_xs from "../img/gallery1/IMG_20_xs.jpg";

import img11_lg from "../img/gallery1/IMG_16_lg.jpg";
import img11_sm from "../img/gallery1/IMG_16_sm.jpg";
import img11_xs from "../img/gallery1/IMG_16_xs.jpg";

import img12_lg from "../img/gallery1/IMG_2926.JPG";
import img12_sm from "../img/gallery1/IMG_2926.JPG";
import img12_xs from "../img/gallery1/IMG_2926.JPG";

import mosaic from "../img/mosaic/mosaic.JPG";

import 'react-photo-view/dist/react-photo-view.css';

import { useRef, useEffect, useState, Fragment } from "react";
import { useDidMountEffect } from "../utils/use";

import { GalleryModal } from "../utils/modal";
import { PhotoProvider, PhotoView } from "react-photo-view";



function getMaxScale(x, x0 = 0) {
    return Math.min(18.0, Math.max(1, ((x - x0) / 150) + 1));
}

function getValue2(x) {
  if (x === 1) {
    return 18;
  } else if (x === 18) {
    return 1;
  }
  return 18 - (x - 1) * (17 / 17);  // 선형 보간
}

export function WeddingGallery({scrollY}){

    const sentinelRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [isShowRockModal, setIsRockModal ] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,
            }
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <div className=" z-20 relative bg-white w-full pt-8">
            <div className="flex flex-col">
                <div className="flex flex-col justify-center text-3xl text-orange-500 font-bold pb-4">
                    <div className="flex justify-center">
                        추억이 모여 지금의
                    </div>
                    <div className="flex justify-center">
                        우리를 만들다
                    </div>
                </div>
                <p className={'text-gray-400'} style={{ textAlign: "center", whiteSpace: "pre-wrap" }}>
                    천천히 아래로 스크롤하면 사진이 보여요.
                </p>
            </div>
            <div ref={sentinelRef} className="sentinel h-[1px]" />
            <div className='main pb-4'>
                <header className="main-header h-screen relative">
                    <PhotoMozic scrollY={scrollY} isSticky={isSticky} />
                </header>
            </div>
             
        </div>
    )
}

function getValue(x) {
  if (x === 1) {
    return 0;
  } else if (x === 18) {
    return 1;
  }
  return (x - 1) / 17;  // 선형 보간
}

function getValue3(x) {
  return (-1 / 17) * x + 18 / 17;
}

function chagneScaleGrid(x){
    let value = (1 / 17) * x - 1 / 17;;
    return value
}

// 첫 번째 함수: x = 1일 때 0, x = 18일 때 500
function changeTranslateX(x) {
  return (500 / 17) * x - (500 / 17);
}

// 두 번째 함수: x = 1일 때 0, x = 18일 때 -2500
function changeTranslateY(y) {
  return (-2500 / 17) * y + (2500 / 17);
}

// filter blur 처리 함수 0.5에서 10, 1에서 1
function getFilterBlur(x) {
  return -18 * x + 18;
}

function PhotoMozic({scrollY, isSticky}){
    
    const [startScroll, setStartScroll ] = useState(0);
    const [zoom, setZoom] = useState(1);  // 줌 비율 상태

     const galleryImages = [
        [img1_lg, img1_sm, img1_xs],
        [img2_lg, img2_sm, img2_xs],
        [img3_lg, img3_sm, img3_xs],
        [img4_lg, img4_sm, img4_xs],
        [img5_lg, img5_sm, img5_xs],
        [img6_lg, img6_sm, img6_xs],
        [img7_lg, img7_sm, img7_xs],
        [img8_lg, img8_sm, img8_xs],
        [img9_lg, img9_sm, img9_xs],
        [img10_lg, img10_sm, img10_xs],
        [img11_lg, img11_sm, img11_xs],
        [img12_lg, img12_sm, img12_xs],
    ];

    useDidMountEffect(()=>{
        setStartScroll(scrollY);
    }, [isSticky])

    // //3600일 때 스크롤 시작
    useDidMountEffect(()=>{

        if (!isSticky) {
            setZoom(1);
            return;

        };
        const newZoom =  getMaxScale(scrollY, startScroll);  // 스크롤 위치에 따른 비율 (조정 가능)
        setZoom(newZoom);

       
    }, [scrollY]);


    return (
        <div className="relative overflow-hidden flex justify-center items-center">
            <img className="w-screen h-screen hover:cursor-pointer absolute" src={mosaic}
                style={{
                    opacity : getValue3(zoom),
                    objectFit : 'cover',
                    transform : `matrix(${zoom},0,0,${zoom},${changeTranslateX(zoom)},${changeTranslateY(zoom)})`,
                    transformOrigin: "center center",  // 줌인/줌아웃의 기준을 이미지 중앙으로 설정
                }}
            />
             <PhotoProvider>
                <div className="w-screen h-screen grid grid-cols-3 grid-rows-4 z-10" 
                    style={{
                        opacity : getValue(zoom),
                        filter: `blur(${getFilterBlur(getValue(zoom),)}px)`,  
                    }}
                >
                    {
                        galleryImages.map(( item, idx) => (
                            <PhotoView key={idx} src={item[0]}>
                                <picture>
                                    <source media={"(max-width:480px)"} srcSet={item[2]}/>
                                    <source media={"(max-width:734px)"} srcSet={item[1]}/>
                                    <source media={"(max-width:1440px)"} srcSet={item[0]}/>
                                    <img src={item[0]}/>
                                </picture>
                            </PhotoView>
                        ))
                    }
                </div>
            </PhotoProvider>
            <div className="absolute bottom-10 font-bold text-lg flex justify-center w-full text-white z-20" style={{
                opacity : getValue(zoom) == 1 ? 1 : 0
            }}>
                사진을 클릭하시면 확대보기가 가능합니다. 
            </div>
        </div>
    )
}



function PhotoMozic1({scrollY, isSticky}){
    
    const [startScroll, setStartScroll ] = useState(0);
    const [ isGalleryModal, setIsGalleryModal ]  = useState(false);
    // const imageList = [Img1,Img2,img3,img7,img8,img11,img13,img14,img16,];

    const galleryImages = [
        [img1_lg, img1_sm, img1_xs],
        [img2_lg, img2_sm, img2_xs],
        [img3_lg, img3_sm, img3_xs],
        [img4_lg, img4_sm, img4_xs],
        [img5_lg, img5_sm, img5_xs],
        [img6_lg, img6_sm, img6_xs],
        [img7_lg, img7_sm, img7_xs],
        [img8_lg, img8_sm, img8_xs],
        [img9_lg, img9_sm, img9_xs],
        [img10_lg, img10_sm, img10_xs],
        [img11_lg, img11_sm, img11_xs],
        [img12_lg, img12_sm, img12_xs],
    ];

    const handleShowModal = () => {
        setIsGalleryModal(true)
    }

    return (
       
            <PhotoProvider>
                <div className="grid grid-cols-3 grid-rows-4" onClick={()=>handleShowModal(true)}>
                    {
                        galleryImages.map(( item, idx) => (
                            <PhotoView key={idx} src={item[0]}>
                                <picture>
                                    <source media={"(max-width:480px)"} srcSet={item[2]}/>
                                    <source media={"(max-width:734px)"} srcSet={item[1]}/>
                                    <source media={"(max-width:1440px)"} srcSet={item[0]}/>
                                    <img src={item[0]}/>
                                </picture>
                           </PhotoView>
                        ))
                    }
                </div>
            </PhotoProvider>
    )
}

