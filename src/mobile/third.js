
import Img1 from "../img/gallery/IMG_1.jpg"; // 마지막 사진
import Img2 from "../img/gallery/IMG_2.jpg"; //+
// import img3 from "../img/gallery/IMG_3.jpg"; //+
// import img4 from "../img/gallery/IMG_4.jpg"; 
// import img5 from "../img/personal/dayeon.jpeg"; // 다연 독사진
// import img6 from "../img/gallery/IMG_6.jpg"; 
// import img7 from "../img/gallery/IMG_7.jpg"; 
// import img8 from "../img/gallery/IMG_8.jpg"; //+
// import img9 from "../img/gallery/IMG_9.jpg"; 
// import img10 from "../img/gallery/IMG_10.jpg"; 

// import img11 from "../img/gallery/IMG_11.jpg"; //+
// import img12 from "../img/gallery/IMG_12.jpg"; 
// import img13 from "../img/gallery/IMG_13.jpg"; //+
// import img14 from "../img/gallery/IMG_14.jpg"; //+
// import img15 from "../img/gallery/IMG_15.jpg";
// import img16 from "../img/gallery/IMG_16.jpg"; //+
// import img17 from "../img/gallery/IMG_17.jpg"; 
// import img18 from "../img/personal/rock.jpeg"; // 락규 독사진
// import img19 from "../img/gallery/IMG_19.jpg"; //+
// import img20 from "../img/gallery/IMG_20.jpg"; //+
// import img21 from "../img/gallery/IMG_21.jpg"; 
// import img22 from "../img/gallery/IMG_22.jpg"; 
// import img23 from "../img/gallery/IMG_23.jpg"; 
// import img24 from "../img/gallery/IMG_24.jpg"; 
// import img25 from "../img/gallery/IMG_25.jpg"; //+
// import img26 from "../img/gallery/IMG_26.jpg"; 
// import img27 from "../img/gallery/IMG_27.jpg"; 
// import img28 from "../img/gallery/IMG_28.jpg"; 
// import img29 from "../img/gallery/IMG_29.jpg"; //+
// import img30 from "../img/gallery/IMG_1.jpg";



import { useRef, useEffect, useState, Fragment } from "react";
import { useDidMountEffect } from "../utils/use";

const img = new Image();
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
        // 또는 return 0.65 * (2.5 - x) / 1.3;
    }
}

function getMaxScale1(x, x0 = 0) {
    return Math.min(3.0, Math.max(1, ((x - x0) / 1200) + 1));
}


export function WeddingGallery({scrollY}){

    const sentinelRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

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
            <div className='main pb-4'>
                <header className="main-header h-screen relative">
                    <PhotoMozic scrollY={scrollY} isSticky={isSticky} />
                </header>
            </div>
            <Map />
        </div>
    )
}

function PhotoMozic({scrollY, isSticky}){
    
    const canvasRef = useRef(null);
    const scaleRef = useRef(1);
    const viewPosRef = useRef(INITIAL_POSITION);
    const [startScroll, setStartScroll ] = useState(0);

    const setTransform = () => {
        const zoomCanvas = canvasRef.current;
        const context = zoomCanvas.getContext('2d');
        context.setTransform(
            scaleRef.current,
            0,
            0,
            scaleRef.current,
            viewPosRef.current.x,
            viewPosRef.current.y
        );
    };

    useEffect(() => {
        const zoomCanvas = canvasRef.current;
        const context = zoomCanvas.getContext('2d');

        img.src = Img1;
        // Load image
        img.onload = function () {
            context.save();
            context.globalAlpha = 1;
            let width = zoomCanvas.width  / 9;
            let height = zoomCanvas.height  / 9;
            for(let i = 0; i < 81; i++){
                let x = i % 9;
                let y = Math.floor(i / 9);
                context.drawImage(img, x * width, y * height, width, height);
            }
            context.restore();
        };

        img2.src = Img2;
        // Load image

        img2.onload = function () {
            context.save();
            context.globalAlpha = 0.7;
            context.drawImage(img2, 0,0, zoomCanvas.width, zoomCanvas.height );
            context.restore();
        };

    }, []);

    useDidMountEffect(()=>{
        setStartScroll(scrollY);
    }, [isSticky])


    //3600일 때 스크롤 시작
    useDidMountEffect(()=>{

        // const { offsetX, offsetY } = e.nativeEvent;

        if (!isSticky) return;

        const zoomCanvas = canvasRef.current;

        const offsetX = zoomCanvas.width / 2;
        const offsetY = zoomCanvas.height / 2;

        // e.preventDefault();
        const xs = (offsetX  - viewPosRef.current.x) / scaleRef.current;
        const ys = (offsetY - viewPosRef.current.y) / scaleRef.current;

        const VISIBLE_TILES_X = 3;
        const VISIBLE_TILES_Y = 3;

        const tileWidth = zoomCanvas.width / 9;
        const tileHeight = zoomCanvas.height / 9;

        const MAX_SCALE = Math.min(
            zoomCanvas.width / (tileWidth * VISIBLE_TILES_X),
            zoomCanvas.height / (tileHeight * VISIBLE_TILES_Y)
        );
        
        // const delta = -e.deltaY;
        const newScale = getMaxScale1(scrollY, startScroll);
        //

        if (newScale >= MIN_SCALE && newScale <= MAX_SCALE) {
            scaleRef.current = newScale;
            viewPosRef.current = {
                x: offsetX - xs * scaleRef.current, // offsetX와 offsetY를 그린 width, height 의 가운데 값을 고정하면 가운데를 기준으로 zoom in, zoom out이 됨.
                y: offsetY - ys * scaleRef.current,
            };
        }
        draw(newScale);
    }, [scrollY]);

    const draw = (scale) => {
        const zoomCanvas = canvasRef.current;
        const context = zoomCanvas.getContext('2d');
        zoomCanvas.width = zoomCanvas.width;
        setTransform();

        let width = zoomCanvas.width  / 9;
        let height = zoomCanvas.height  / 9;

        for(let i = 0; i < 81; i++){
            let x = i % 9;
            let y = Math.floor(i / 9);
            context.save();
            context.globalAlpha = 1;
            context.drawImage(img, x * width, y * height, width, height);
        }
        context.restore();
        context.save();
        context.globalAlpha = 0.65;

        let value = calculateValue(scale);
        context.globalAlpha = value;

        context.drawImage(img2, 0,0, zoomCanvas.width, zoomCanvas.height );
        context.restore();
    }


    return (
        <canvas
            ref={canvasRef}
            width={1024}
            height={765}
            className="w-full h-full"
        />
    )
}

function Map() {
    const mapRef = useRef(null);
    const { naver } = window;

    const contentString = `
    <div id="infowindow-content" style="padding:10px; cursor: pointer;" >
      <b>전주 더케이 웨딩홀</b><br/>
      <b>오전 11시</b>
    </div>
  `;
    
    useEffect(() => {

        const placeName = '전주 더케이 웨딩홀';
        const encodedPlaceName = encodeURIComponent(placeName);
        const searchUrl = `https://map.naver.com/v5/search/${encodedPlaceName}`;

        const position = new naver.maps.LatLng(35.83334797115717, 127.12212097676218);
        // 네이버 지도 옵션 선택
        const mapOptions = {
            // 지도의 초기 중심 좌표
            center: position,
            logoControl: false, // 네이버 로고 표시 X
            mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
            scaleControl: true, // 지도 축척 컨트롤의 표시 여부
            tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
            zoom: 16, // 지도의 초기 줌 레벨
            zoomControl: true, // 줌 컨트롤 표시
            zoomControlOptions: { position: 9 }, // 줌 컨트롤 우하단에 배치
        };

        const map = new naver.maps.Map('map', mapOptions);
        mapRef.current =map;

        const marker = new naver.maps.Marker({
            position,
            map,
            title : '전주 더케이 웨딩홀'
      })
      
      const infoWindow = new naver.maps.InfoWindow({
        content: contentString,
        maxWidth: 300,
        anchorSize: {
          width: 12,
          height: 14,
        },
        borderColor: "#cecdc7",
      });
  
      // ✅ InfoWindow를 열어야 화면에 표시됨
      infoWindow.open(map, marker);

        // 지도 클릭 이벤트 추가
        naver.maps.Event.addListener(map, 'click', function() {
            window.location.href = "https://naver.me/5Rh1Fltq";
        });

        // 마커 클릭 이벤트 추가 (선택 사항)
        naver.maps.Event.addListener(marker, 'click', function() {
            window.open('https://map.naver.com/v5/search/전주 더케이 웨딩홀', '_blank');
        });

        // ✅ DOM 이벤트 등록 (InfoWindow 내부 content가 DOM에 attach 된 이후)
        setTimeout(() => {
            const el = document.getElementById('infowindow-content');
            if (el) {
            el.addEventListener('click', () => {
                // 원하는 동작 실행
                window.open('https://map.naver.com/v5/search/전주 더케이 웨딩홀', '_blank');
            });
            }
        }, 0); // DOM 렌더 이후에 이벤트 바인딩
    
    }, []);
  
    return (
        <div className="px-4"> 
            <div className="py-2">
                <div className="flex justify-center text-3xl text-orange-500 font-bold pb-4">
                    오시는 길
                </div>
            </div>
            <div id="map" style={{
                height : "400px"
            }}/>
            <div className="flex flex-col pb-2 pt-4">
                🚘 자가용 이용 시
                <div>
                &nbsp;&nbsp;네비게이션 : "전주 더케이웨딩홀" 검색
                지하 1~4층 무료 주차 이용 가능
                </div>
            </div>
            <div className="flex flex-col py-2">
                🚍 고속 버스 이용 시
                <div>
                &nbsp;&nbsp;전주 고속터미널 하차 더케이 웨딩홀까지 도보 15분 소요 / 택시 기본요금
                </div>
            </div>
            <div className="flex flex-col py-2">
                🚆 ktx 이용 시
                <div>
                &nbsp;&nbsp;전주역에서 하차 택시 이용
                </div>
            </div>
        </div>
       
    )
  }
  
  export default Map;