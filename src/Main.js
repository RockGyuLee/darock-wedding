
import { Invitations } from "./mobile/invitations";
import { WeddingGallery } from "./mobile/third"

import mainScreen from "./img/main/mainScreen.jpg" 

// import main4BG from "./img/main/main4.jpeg";


export function Main({   scrollY }){
  

    return (
        <div className="w-full h-full">
            <div className="w-full h-full  flex justify-center items-center">
                <div className="grid grid-rows-5 h-screen">
                    <div className="row-span-1 w-full flex-col font-bold flex items-center justify-center ">
                        {/*   absolute items-center justify-center top-10 font-bold text-2xl */}
                            <div className="flex justify-start pr-2 text-3xl">
                                락규♥다연
                            </div>
                            <div className=" text-xl">
                                결혼 합니다.
                            </div>
                    </div>
                    <div className="row-span-3 w-full h-auto flex justify-center ">
                        <img 
                            className="shadow-md object-contain max-h-full max-w-full"
                            style={{
                                borderRadius : "20%"
                            }}
                            src={mainScreen}
                        />
                    </div>
                    <div className="row-span-1 w-full  h-auto flex items-center justify-center text-xl" >
                        <div className="flex-col">
                            <div>2025.08.30(토) 오전 11시</div>
                            <div className="flex justify-center">전주 더케이웨딩홀</div>
                        </div>
                    </div>
                </div>
            </div>
        <Invitations scrollY={scrollY}/>
        <WeddingGallery />
    
    </div>
    )
}