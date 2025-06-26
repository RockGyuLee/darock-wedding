import Photobooth from "../img/booth/photobooth.png"

export function PhotoBooth(){

    return (
        <div className="px-4 mt-12">
            <div className="py-2">
                <div className="flex justify-center text-3xl text-orange-500 font-bold pb-4">
                    안내
                </div>
            </div>
            <div className="py-2">
                <div className=" w-full flex justify-center ">
                    <img style={{
                        width : "80%"
                    }} className=" rounded-2xl" src={Photobooth}/>

                </div>
                <div className="flex flex-col w-full justify-center px-16">
                     <div className="text-sm pt-4 py-2">
                        가장 기쁘고 빛나는 결혼식에 참석해주신
                        하객분들을 위해 포토부스가 로비에 설치 될 예정입니다.
                    </div>
                    <div className="text-sm py-2">
                        즉석에서 촬영된 사진 2매가 인화되어
                        한 장은 즐거운 기념사진으로 간직하여 주시고,
                    </div>
                    <div className="text-sm py-2">
                        한 장은 포토방명록에 붙여 축하메세지와 함께 
                        추억을 남겨주세요.
                    </div>
                </div>
               
            </div>
        </div>
    )
}