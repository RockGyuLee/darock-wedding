
import Img1 from "../img/gallery/IMG_1.jpg"; // 마지막 사진
import Img2 from "../img/gallery/IMG_2.jpg"; //+
import img3 from "../img/gallery/IMG_3.jpg"; //+
import img7 from "../img/gallery/IMG_7.jpg"; //+
import img8 from "../img/gallery/IMG_8.jpg"; //+

import img11 from "../img/gallery/IMG_11.jpg"; //+
import img13 from "../img/gallery/IMG_13.jpg"; //+
import img14 from "../img/gallery/IMG_14.jpg"; //+
import img16 from "../img/gallery/IMG_16.jpg"; //+
import img19 from "../img/gallery/IMG_19.jpg"; //+
import img20 from "../img/gallery/IMG_20.jpg"; //+
import img21 from "../img/gallery/IMG_21.jpg"; //+
import img25 from "../img/gallery/IMG_25.jpg"; //+
import img29 from "../img/gallery/IMG_29.jpg"; //+
import img30 from "../img/gallery/IMG_30.jpg"; //+
import 'react-photo-view/dist/react-photo-view.css';



import { useRef, useEffect, useState, Fragment } from "react";
import { useDidMountEffect } from "../utils/use";

import { GalleryModal } from "../utils/modal";
import { PhotoProvider, PhotoView } from "react-photo-view";

const img2 = new Image();
const INITIAL_POSITION = { x: 0, y: 0 };
const MIN_SCALE = 1;



function calculateValue(x) {
    if (x <= 1.2) {
        return 0.65;
    } else if (x >= 2.5) {
        return 0;
    } else {
        return 0.65 * (1 - (x - 1.2) / (2.5 - 1.2));
    }
}

function getMaxScale1(x, x0 = 0) {
    return Math.min(3.0, Math.max(1, ((x - x0) / 1200) + 1));
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
                <div className="flex justify-center text-3xl text-orange-500 font-bold pb-4">
                    웨딩 갤러리
                </div>
                <p className={'text-gray-400'} style={{ textAlign: "center", whiteSpace: "pre-wrap" }}>
                    여러 사진들속 조각들이 모여 우리를 만들다.
                </p>
            </div>
            <div ref={sentinelRef} className="sentinel h-[1px]" />
            {/* <div className='main pb-4'>
                <header className="main-header h-screen relative">
                    <PhotoMozic scrollY={scrollY} isSticky={isSticky} />
                </header>
            </div> */}
             <div className=' pb-4'>
                <PhotoMozic1 scrollY={scrollY} isSticky={isSticky} />
            </div>
        </div>
    )
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getOpacityGalleryText(value){
    return 2 * value - 5;
}


function PhotoMozic({scrollY, isSticky}){
    
    const canvasRef = useRef(null);
    const scaleRef = useRef(1);
    const viewPosRef = useRef(INITIAL_POSITION);
    const [startScroll, setStartScroll ] = useState(0);
    const [imageList, setImageList] = useState([]);
    const [ isGalleryModal, setIsGalleryModal ]  = useState(false);

    // const setTransform = () => {
    //     const zoomCanvas = canvasRef.current;
    //     const context = zoomCanvas.getContext('2d');
    //     context.setTransform(
    //         scaleRef.current,
    //         0,
    //         0,
    //         scaleRef.current,
    //         viewPosRef.current.x,
    //         viewPosRef.current.y
    //     );
    // };

    // useEffect(() => {
    //     const sources = [
    //         img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, 
    //         img_10,img_11, img_12, img_13, img_14, img_15, img_16, img_17, img_18, 
    //         img_19, img_20,img_21, img_22, img_23, img_24, img_25, img_26, img_27, 
    //         img_28, img_29, img_30,img_31, img_32, img_33, img_34, img_35, img_36, 
    //         img_37, img_38, img_39, img_40,img_41, img_42, img_43, img_44, img_45, 
    //         img_46, img_47, img_48, img_49, img_50,img_51, img_52, img_53, img_54,
    //         img_55, img_56, img_57, img_58, img_59, img_60,img_61, img_62, img_63, 
    //         img_64, img_65, img_66, img_67, img_68, img_69, img_70,img_71, img_72, 
    //         img_73, img_74, img_75, img_76, img_77, img_78, img_79, img_80,img_81
    //     ];
    
    //     const loadedImages = [];
    //     let loadedCount = 0;
    //     const img_list = [
    //         img3,img7,img8,
    //         img11,img13,img14,
    //         img19,img20,img25];

    //     for(let i = 0; i < 81; i++){

    //         const img = new Image();
    //         switch(i){
    //             case 30 :
    //                 img.src = img3;
    //                 break;
    //             case 31 :
    //                 img.src = img7;
    //                 break;
    //             case 32 :
    //                 img.src = img8;
    //                 break;
    //             case 39:
    //                 img.src = img11;
    //                 break;
    //             case 40 :
    //                 img.src = img13;
    //                 break;
    //             case 41 :
    //                 img.src = img14;
    //                 break;
    //             case 48 :
    //                 img.src = img19;
    //                 break;
    //             case 49 :
    //                 img.src = img20;
    //                 break;
    //             case 50 :
    //                 img.src = img25;
    //                 break;
    //             default :
    //             img.src = sources[getRandomInt(81)];
    //         }
    //         img.onload = () => {
    //             loadedImages[i] = img;
    //             loadedCount++;
    //             // 모든 이미지가 로드되었을 때 state 업데이트
    //             if (loadedCount === sources.length) {
    //             setImageList(loadedImages);
    //             }
    //         };
    //     }
    //   }, []);

    // useDidMountEffect(() => {
    //     if (imageList.length > 0 && canvasRef.current) {
    //         const zoomCanvas = canvasRef.current;
    //         const context = zoomCanvas.getContext('2d');

    //         imageList.forEach((img, idx) => {
    //             let width = zoomCanvas.width  / 9;
    //             let height = zoomCanvas.height  / 9;
    //             let x = idx % 9;
    //             let y = Math.floor(idx / 9);
    //             context.drawImage(img, x * width, y * height, width, height);
    //         });

    //         img2.src = Img2;

    //         img2.onload = function () {
    //             context.save();
    //             context.globalAlpha = 0.8;
    //             context.drawImage(img2, 0,0, zoomCanvas.width, zoomCanvas.height );
    //             context.restore();
    //         };
    //     }

    // }, [imageList]);

    // useDidMountEffect(()=>{
    //     setStartScroll(scrollY);
    // }, [isSticky])


    // //3600일 때 스크롤 시작
    // useDidMountEffect(()=>{

    //     const zoomCanvas = canvasRef.current;
    //     // const { offsetX, offsetY } = e.nativeEvent;
    //     if (!isSticky) {
    //         scaleRef.current = 1;
    //         viewPosRef.current = {
    //             x: 0, // offsetX와 offsetY를 그린 width, height 의 가운데 값을 고정하면 가운데를 기준으로 zoom in, zoom out이 됨.
    //             y: 0,
    //         };
    //         draw(1)
    //         return;
    //     };

    //     const offsetX = zoomCanvas.width / 2;
    //     const offsetY = zoomCanvas.height / 2;

    //     // e.preventDefault();
    //     const xs = (offsetX  - viewPosRef.current.x) / scaleRef.current;
    //     const ys = (offsetY - viewPosRef.current.y) / scaleRef.current;

    //     const VISIBLE_TILES_X = 3;
    //     const VISIBLE_TILES_Y = 3;

    //     const tileWidth = zoomCanvas.width / 9;
    //     const tileHeight = zoomCanvas.height / 9;

    //     const MAX_SCALE = Math.min(
    //         zoomCanvas.width / (tileWidth * VISIBLE_TILES_X),
    //         zoomCanvas.height / (tileHeight * VISIBLE_TILES_Y)
    //     );
        
    //     // const delta = -e.deltaY;
    //     const newScale = getMaxScale1(scrollY, startScroll);
    //     //

    //     if (newScale >= MIN_SCALE && newScale <= MAX_SCALE) {
    //         scaleRef.current = newScale;
    //         viewPosRef.current = {
    //             x: offsetX - xs * scaleRef.current, // offsetX와 offsetY를 그린 width, height 의 가운데 값을 고정하면 가운데를 기준으로 zoom in, zoom out이 됨.
    //             y: offsetY - ys * scaleRef.current,
    //         };
    //     }
    //     draw(newScale);
    // }, [scrollY]);

    // const draw = (scale) => {
    //     const zoomCanvas = canvasRef.current;
    //     const context = zoomCanvas.getContext('2d');
    //     zoomCanvas.width = zoomCanvas.width;
    //     setTransform();

    //     let width = zoomCanvas.width  / 9;
    //     let height = zoomCanvas.height  / 9;

    //     imageList.forEach((img, idx) => {

    //         let x = idx % 9;
    //         let y = Math.floor(idx / 9);
    //         context.drawImage(img, x * width, y * height, width, height);
    //     });

    //     context.restore();
    //     context.save();
    //     context.globalAlpha = 0.65;

    //     let value = calculateValue(scale);
    //     context.globalAlpha = value;

    //     context.drawImage(img2, 0,0, zoomCanvas.width, zoomCanvas.height );
    //     context.restore();
    // }

    // const handleShowModal = () => {
    //     if(getMaxScale1(scrollY, startScroll) < 2.5) return;
    //     setIsGalleryModal(true)
    // }

    return (
        <Fragment>
            {/* <img className="w-full h-full hover:cursor-pointer" src={MoMo}/> */}
            {/* <canvas
                ref={canvasRef}
                width={1024}
                height={765}
                className="w-full h-full hover:cursor-pointer"
                onClick={handleShowModal}
            /> */}
            <div className="absolute bottom-10 font-bold text-lg flex justify-center w-full text-violet-500" style={{
                opacity : getOpacityGalleryText(getMaxScale1(scrollY, startScroll))
            }}>사진을 클릭하시면 확대보기가 가능합니다. </div>
            <GalleryModal isShow={isGalleryModal} setIsShow={setIsGalleryModal}/>
        </Fragment>
    )
}



function PhotoMozic1({scrollY, isSticky}){
    
    const [startScroll, setStartScroll ] = useState(0);
    const [ isGalleryModal, setIsGalleryModal ]  = useState(false);
    const imageList = [Img1,Img2,img3,img7,img8,img11,img13,img14,img16,img21,img29,img30]

    const handleShowModal = () => {
        setIsGalleryModal(true)
    }

    return (
       
            <PhotoProvider>
                <div className="grid grid-cols-3 grid-rows-4" onClick={()=>handleShowModal(true)}>
                    {
                        imageList.map(( item, idx) => (
                            <PhotoView key={idx} src={item}>
                                <img src={item} alt="" />
                            </PhotoView>
                        ))
                    }
                </div>
            </PhotoProvider>
    )
}

