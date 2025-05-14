
import mainBG from "./img/main/main.JPG";
import main3BG from "./img/main/main3.JPEG";

// import main4BG from "./img/main/main4.jpeg";

const title = [
    '2025.08.30(토) 11시',
    '이락규 그리고 장다연',
    '결혼합니다.'
]

const scaleX_1 = 1;
const scaleX_2 = 0.65;

const scaleY_1 = 0;
const scaleY_2 = -80;

const imageScaleY_1 = 0;
const imageScaleY_2 = 1;

// y=ax+b a는 기울기.
// b = y -ax;
const a = ((scaleY_2 - scaleY_1) / (scaleX_2 - scaleX_1 ));
const b = scaleY_2 - (a * scaleX_2 )

const image_a = ((imageScaleY_2 - imageScaleY_1) / (scaleX_2 - scaleX_1 ));
const image_b = imageScaleY_2 - (image_a * scaleX_2 )

export function Main({ scaleY,  scrollY }){
    let image2_oppacity = (image_a * scaleY) + image_b;
    let image1_oppacity = 1 - image2_oppacity;

    console.log("main", scaleY, scrollY)

    return (
        <div>
            <div className='main pb-8' >
                <header className='main-header'>
                    {/*처음 배경 사진에서 각자 위치에 맞게 이름 변경 */}
                    <div className=" absolute z-10 text-2xl text-black top-5 right-5" style={{
                            display : image1_oppacity == 0 ? 'none' : 'block',
                            opacity : image1_oppacity
                        }}>이락규</div> 
                    <div className=" absolute z-10 text-2xl text-white top-5 left-5" style={{
                            display : image1_oppacity == 0 ? 'none' : 'block',
                            opacity : image1_oppacity
                        }}>장다연</div>
                    <div className=" w-full h-full relative" style={{
                        height : `${window.innerHeight}px`,
                        transform : `matrix(${scaleY}, 0, 0, ${scaleY}, 0, ${( a * scaleY )+b})`,
                    }}>
                        <img src={main3BG} className=" absolute w-full h-full" style={{
                            display : image1_oppacity == 0 ? 'none' : 'block',
                            opacity : image1_oppacity
                        }}/>
                        <img src={mainBG} className=" absolute  w-full h-full" style={{
                            display : image2_oppacity == 0 ? 'none' : 'block',
                            opacity : image2_oppacity,
                        }}/>
                    </div>
                   <div >
                        <div className={' text-2xl font-bold'} >2025.08.30(토) 11시</div>
                        <div className={'font-bold pt-4'} >이락규 그리고 장다연</div>
                        <div className={'font-bold pt-4'} >결혼합니다.</div>
                   </div>
                </header>
            </div>
            <div className='h-[500px]'>
            </div>
        </div>
    )
}

function Title({opacity}){
    return (
        <div className=' flex flex-col items-center bottom-0 w-full mt-0 mobile:mt-0 desktop:mt-20'>
            {
                <Text className={' text-4xl font-bold'} style={{
                    opacity
                }}>2025.08.30(토) 11시</Text>
            }
            {
                <Text className={'font-bold pt-4'} style={{
                    opacity
                }}>이락규 그리고 장다연</Text>
            }
            {
                <Text className={'font-bold pt-4'} style={{
                    opacity
                }}>결혼합니다.</Text>
            }
        </div>
    )
}

function Text(props){

    return (
        <div {...props} className="text-2xl mobile:text-4xl desktop:text-6xl">
            {props.children}
        </div>
    )
}