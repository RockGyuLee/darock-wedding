import { useRef, useEffect, useState, Fragment } from "react";


export function Location() {
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
            <div className="w-full h-full flex justify-center">
                <div id="map" className="w-full" style={{
                    height : "350px"
                }}/>
            </div>
            
            <div className="flex flex-col pb-2 my-8 ">
                <div className="border-b outline-offset-4">
                    🚘 자가용 이용 시
                </div>
                <div className=" pt-2 pl-2 text-xs">
                    네비게이션 : "전주 더케이웨딩홀" 검색
                    지하 1~4층 2시간 무료 주차 이용 가능
                </div>
                <div className=" pt-1 pl-2 text-xs">
                전북 전주시 완산구 서신동 769-1 더케이웨딩홀 
                </div>
            </div>
            <div className="flex flex-col pb-2 my-8">
                <div className="border-b outline-offset-4">
                    🚍 고속 버스 이용 시
                </div>
                <div className=" pt-2 pl-2 text-xs">
                전주 고속터미널 하차 더케이 웨딩홀까지 도보 15분 소요 / 택시 기본요금
                </div>
            </div>
            <div className="flex flex-col py-2">
                <div className="border-b outline-offset-4">
                    🚆 ktx 이용 시
                </div>
                <div className=" pt-2 pl-2 text-xs">
                전주역에서 하차 택시 이용
                </div>
            </div>
        </div>
       
    )
}