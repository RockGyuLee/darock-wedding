
import { Invitations } from "./mobile/invitations";
import { WeddingGallery } from "./mobile/third";
import { Location } from "./mobile/location";

// import mainScreen from "./img/main/mainScreen.jpg";
import mainScreenXs from "./img/main/mainScreen_xs.jpg";
import mainScreenSm from "./img/main/mainScreen_sm.jpg";
import mainScreenLg from "./img/main/mainScreen_lg.jpg";

import { useState, useEffect, useRef} from "react"
import { PhotoBooth } from "./mobile/Info";
import { EndUi } from "./mobile/end";

// import main4BG from "./img/main/main4.jpeg";


export function Main({ }){

    const [scrollY, setScrollY] = useState(0)

    useEffect(()=> {

        window.addEventListener("scroll", ()=> {
            scrollProgress()
        });

        return () => window.removeEventListener("scroll", ()=> {
            scrollProgress()
        });
    }, []);
        
    const scrollProgress = (e) => {
        const scrollTop = document.documentElement.scrollTop;

        setScrollY(scrollTop)
    }
  
    return (
        <div className="w-full h-full">
            <div>
                <div className="w-full h-full  flex justify-center items-center">
                    <div className="grid grid-rows-5 h-screen">
                        <div className="row-span-1 w-full flex-col font-bold flex items-center justify-center ">
                            {/*   absolute items-center justify-center top-10 font-bold text-2xl */}
                                <div className="flex justify-center text-3xl">
                                    락규♥다연
                                </div>
                                <div className=" text-xl">
                                    결혼 합니다.
                                </div>
                        </div>
                        <div className="row-span-3 w-full h-auto flex  ">
                            <img 
                                className="shadow-md object-contain max-h-full max-w-full"
                                style={{
                                    borderRadius : "20%"
                                }}
                                src={mainScreenLg}
                            />
                        </div>
                        <div className="row-span-1 w-full  h-auto flex items-center justify-center text-xl" >
                            <div className="flex-col">
                                <div className="flex justify-center">2025.08.30(토) 오전 11시</div>
                                <div className="flex justify-center">전주 더케이웨딩홀 4층 오페라홀</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Invitations/>
            </div>
        <WeddingGallery scrollY={scrollY}/>
        <Location />
        <PhotoBooth />
        <EndUi />
    </div>
    )
}