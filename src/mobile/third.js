
import img2020 from "../img/scrollImg/2020.jpeg";
import img2021 from "../img/scrollImg/2021.jpeg";
import img2022 from "../img/scrollImg/2022.jpeg";
import img2023 from "../img/scrollImg/2023.jpeg";
import img2024 from "../img/scrollImg/2024.jpeg";
import img2025 from "../img/scrollImg/2025.jpeg";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useRef, useEffect } from "react";


const images = [
    {
        original: img2020,
        thumbnail: img2020,
    },
    {
        original: img2021,
        thumbnail: img2021,
    },
    {
        original: img2022,
        thumbnail: img2022,
    },
];

export function WeddingGallery(){

    const mapRef = useRef(null);
    const { naver } = window;

    return (
        <div className=" z-20 absolute bg-white w-full">
            <div className="flex flex-col">
                <div className="flex justify-center text-3xl text-orange-500 font-bold pb-4">
                    " 결혼 사진첩 "
                </div>
            </div>
            <div className='main pb-4' >
                <ImageGallery 
                    items={images}
                    autoPlay={true}
                />;
            </div>
            <Map />
        </div>
    )

}

function Map() {
    const mapRef = useRef(null);
    const { naver } = window;
    
    useEffect(() => {
      // 네이버 지도 옵션 선택
      const mapOptions = {
        // 지도의 초기 중심 좌표
        center: new naver.maps.LatLng(35.83334797115717, 127.12212097676218),
        logoControl: false, // 네이버 로고 표시 X
        mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
        scaleControl: true, // 지도 축척 컨트롤의 표시 여부
        tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
        zoom: 14, // 지도의 초기 줌 레벨
        zoomControl: true, // 줌 컨트롤 표시
        zoomControlOptions: { position: 9 }, // 줌 컨트롤 우하단에 배치
      };
      mapRef.current = new naver.maps.Map(
        'map',
        mapOptions
      );
    }, []);
  
    return <div id="map" style={{
        width : "100%",
        height : "400px"
    }}/>
  }
  
  export default Map;