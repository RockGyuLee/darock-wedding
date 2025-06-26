import {Fragment, useEffect} from "react";
import HappyEnding from "../img/end/end_photo.png"



export function EndUi(){


    useEffect(() => {
		// 카카오 SDK 초기화
		if (!window.Kakao.isInitialized()) {
			window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
		}
	}, []);

    const handleKakaoShare = () => {
        window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
            title: '락규 ❤️ 다연 결혼식에 초대합니다.',
            description: '예식일 2025년 08월30일(토) 오전 11시',
            imageUrl: 'https://rockgyulee.github.io/darock-wedding/meta_content.jpg', // 이미지 URL
            link: {
                mobileWebUrl: 'https://rockgyulee.github.io/darock-wedding/',
                webUrl: 'https://rockgyulee.github.io/darock-wedding/',
            },
            },
            buttons: [
            {
                title: '청첩장 보기',
                link: {
                mobileWebUrl: 'https://rockgyulee.github.io/darock-wedding/',
                webUrl: 'https://rockgyulee.github.io/darock-wedding/',
                },
            },
            ],
        });
    };

     const copy2Clipboard = async (account) => {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText("https://rockgyulee.github.io/darock-wedding/"); // writeText는 Promise<void>
                alert("복사되었습니다.");
            } else {
                alert("클립보드 접근이 지원되지 않습니다." + navigator.clipboard);
            }
        } catch (error) {
            alert("오류가 있습니다.");
            console.error(error);
        }
    };
    return (
        <div className="relative">
            <div className="absolute w-full justify-center pt-5 mobile:pt-2 text-sm text-white z-10">
                <div className="flex justify-center">항상 저희를 지켜봐주시고 지원해주신 부모님과 가족,</div>
                <div className="flex justify-center">그리고 응원과 축하의 마음을 전해주신 모든 분들께</div>
                <div className="flex justify-center">진심으로 감사드립니다.</div>
                <div className="flex justify-center">항상 건강하시고 행복하세요.</div>
            </div>
            <div className="absolute w-full h-full bg-black font-bold" style={{
                opacity : 0.5
            }}/>
            <div className="overflow-hidden flex justify-center">
                <img src={HappyEnding} />
            </div>
            <div className="flex w-full justify-center absolute bottom-12 mobile:bottom-4">
                <button onClick={handleKakaoShare} className="whitespace-nowrap z-10 border p-2 mx-2 rounded text-white">
                    카카오톡으로 공유
                </button>
                <button onClick={copy2Clipboard} className="whitespace-nowrap z-10 border p-2 mx-2 rounded text-white">
                    링크로 공유
                </button>
            </div>  
            
        </div>
    )
}