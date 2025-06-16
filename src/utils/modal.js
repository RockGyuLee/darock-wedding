import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { faEnvelope, faPhone, faXmark, faCopy } from "@fortawesome/free-solid-svg-icons";

import kakaoPay from "../img/kakaopay/btn_send_tiny.png";

export function Modal({isShow, setIsShow}){

    const handleClick = () => {
        window.location.href = `https://link.kakaopay.com/_/a7KA7Kl`;
    }

    return (
        <Dialog open={isShow} onClose={setIsShow} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                    transition
                    className="desktop:w-1/2 elative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                >
                    <div className="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-center relative">
                        <FontAwesomeIcon onClick={()=>setIsShow(false)} icon={faXmark} className="text-gray-400 right-0 absolute cursor-pointer hover:text-purple-400 "/>
                    </div>
                    <div>
                        <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                            Deactivate account
                        </DialogTitle>
                        <div className="mt-2" onClick={handleClick}>
                          <img src={kakaoPay}/>
                        </div>
                        </div>
                    </div>
                    </div>
                   
                </DialogPanel>
                </div>
            </div>
    </Dialog>
    )
}

export function RockCallModal({isShow, setIsShow}){

    const move2RockKakaopay = () => {
        window.location.href = `https://link.kakaopay.com/_/a7KA7Kl`;
    }

    const copy2Clipboard = async (account) => {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(account); // writeText는 Promise<void>
                alert("복사되었습니다.");
            } else {
                alert("클립보드 접근이 지원되지 않습니다." + navigator.clipboard);
            }
        } catch (error) {
            alert("오류가 있습니다.");
            console.error(error);
        }
    };


    const handleCall = (phone_number) => {
        window.location.href = `tel:${phone_number}`; // 사용자 기기의 전화어플로 연결됨.
    }

    const handleMessage = (phone_number) => {
        window.location.href = `sms:${phone_number}`; // 사용자 기기의 전화어플로 연결됨.
    }

   
    return (
        <Dialog open={isShow} onClose={setIsShow} className="relative z-30">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center mobile:w-full mobile:items-center mobile:p-0">
                <DialogPanel
                    transition
                    className="desktop:w-1/2 mobile:w-full mobile:mx-4 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in mobile:my-8 mobile:max-w-lg data-closed:mobile:translate-y-0 data-closed:mobile:scale-95"
                >
                    <div className="bg-white px-4 pt-2 pb-4  mobile:p-6 mobile:pb-4 ">
                        <div className="mobile:flex mobile:items-center relative">
                            <FontAwesomeIcon onClick={()=>setIsShow(false)} icon={faXmark} className="text-gray-400 right-0 absolute cursor-pointer hover:text-purple-400 "/>
                        </div>
                        <div>
                            <div className="mt-4 mb-4 text-center mobile:mt-0 mobile:ml-4 mobile:text-left">
                                <div className="text-xs text-gray-500 font-bold border-gray-400 flex  pb-2" style={{
                                    borderBottom : "dotted"
                                }}>신랑측</div>
                                <div className="flex-col">
                                    <div className="grid grid-cols-3 relative  pt-2 ">
                                        <DialogTitle className="items-start mt-2 text-xs font-semibold text-gray-400">
                                            신랑
                                        </DialogTitle>
                                        <div className="flex flex-col">
                                            <DialogTitle className="items-center mt-2 text-sm font-semibold text-gray-600">
                                                이락규
                                            </DialogTitle>
                                        </div>
                                        <div className="mt-2">
                                            <FontAwesomeIcon icon={faPhone} className="mx-2 text-gray-600" size="lg" onClick={handleCall.bind(null, '01099185994')}/>
                                            <FontAwesomeIcon icon={faEnvelope} className="mx-2 text-gray-600" size="lg" onClick={handleMessage.bind(null,'01099185994' )}/>
                                        </div>
                                    </div>
                                    <div className="col-span-3 border-b pb-2 border-gray-300">
                                        <div className="flex justify-center">
                                            <div className="  pt-2 px-2 flex justify-center ">
                                                <div className=" mt-2 text-xs font-semibold text-gray-600 flex flex-col" onClick={copy2Clipboard.bind(null, "국민은행 67270201422761")}>
                                                    국민은행-67270201422761
                                                    <FontAwesomeIcon className="pl-2" icon={faCopy} size="xl"/>
                                                </div>
                                            </div>
                                            <div className="  pt-2 flex justify-center">
                                                <div className="flex items-center justify-center rounded-lg w-28 p-1 col-span-2 mt-2 text-xs font-semibold text-gray-600" style={{
                                                    backgroundColor : "#FEE500"
                                                }}
                                                    onClick={move2RockKakaopay}
                                                >
                                                    카카오페이&nbsp;
                                                    <div className="text-md text-gray-900"style={{
                                                        fontWeight : "900"
                                                    }}>
                                                        송금
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 relative  pt-2 ">
                                        <DialogTitle className="items-start mt-2 text-xs font-semibold text-gray-400">
                                            신랑 아버지
                                        </DialogTitle>
                                        <DialogTitle className="items-center mt-2 text-sm font-semibold text-gray-600">
                                            이현곤
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <FontAwesomeIcon icon={faPhone} className="mx-2 text-gray-600" size="lg" onClick={handleCall.bind(null, '01092865523')}/>
                                            <FontAwesomeIcon icon={faEnvelope} className="mx-2 text-gray-600" size="lg" onClick={handleMessage.bind(null,'01092865523' )}/>
                                        </div>
                                    </div>
                                    <div className="col-span-3 border-b pb-2 border-gray-300">
                                        <div className="flex justify-center">
                                            <div className="  pt-2 px-2 flex justify-center ">
                                                <DialogTitle className=" mt-2 text-xs font-semibold text-gray-600 " onClick={copy2Clipboard.bind(null, "전북은행 539210461759")}>
                                                    전북은행-539210461759
                                                    <FontAwesomeIcon className="pl-2" icon={faCopy} size="xl"/>
                                                </DialogTitle>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 relative  pt-2 ">
                                        <DialogTitle className="items-start mt-2 text-xs font-semibold text-gray-400">
                                            신랑 어머니
                                        </DialogTitle>
                                        <DialogTitle className="items-center mt-2 text-sm font-semibold text-gray-600 ">
                                            김은미
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <FontAwesomeIcon icon={faPhone} className="mx-2 text-gray-600" size="lg" onClick={handleCall.bind(null, '01094818994')}/>
                                            <FontAwesomeIcon icon={faEnvelope} className="mx-2 text-gray-600" size="lg" onClick={handleMessage.bind(null,'01092865523' )}/>
                                        </div>
                                    </div>
                                    <div className="col-span-3 ">
                                        <div className="flex justify-center">
                                            <div className="  pt-2 px-2 flex justify-center ">
                                                <DialogTitle className=" mt-2 text-xs font-semibold text-gray-600 " onClick={copy2Clipboard}>
                                                    국민은행-67270201422761
                                                    <FontAwesomeIcon className="pl-2" icon={faCopy} size="xl"/>
                                                </DialogTitle>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
                </div>
            </div>
    </Dialog>
    )
}

export function DaCallModal({isShow, setIsShow}){


    const move2DaKakaopay = () => {
        window.location.href = `https://link.kakaopay.com/_/9-LrPOl`;
    }


    const handleCall = (phone_number) => {
        window.location.href = `tel:${phone_number}`; // 사용자 기기의 전화어플로 연결됨.
    }

    const handleMessage = (phone_number) => {
        window.location.href = `sms:${phone_number}`; // 사용자 기기의 전화어플로 연결됨.
    }

    const copy2Clipboard = async (account) => {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(account); // writeText는 Promise<void>
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
        <Dialog open={isShow} onClose={setIsShow} className="relative z-30">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center mobile:w-full mobile:items-center mobile:p-0">
                <DialogPanel
                    transition
                    className="desktop:w-1/2 mobile:w-full mobile:mx-4 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in mobile:my-8 mobile:max-w-lg data-closed:mobile:translate-y-0 data-closed:mobile:scale-95"
                >
                    <div className="bg-white px-4 pt-2 pb-4  mobile:p-6 mobile:pb-4 ">
                        <div className="mobile:flex mobile:items-center relative">
                            <FontAwesomeIcon onClick={()=>setIsShow(false)} icon={faXmark} className="text-gray-400 right-0 absolute cursor-pointer hover:text-purple-400 "/>
                        </div>
                        <div>
                            <div className="mt-4 mb-4 text-center mobile:mt-0 mobile:ml-4 mobile:text-left">
                                <div className="text-xs font-bold text-gray-500 border-gray-400 flex pb-2" style={{
                                    borderBottom : "dotted"
                                }}>신부측</div>
                                <div className="flex-col">
                                    <div className="grid grid-cols-3 relative  pt-2 ">
                                        <DialogTitle className="items-start mt-2 text-xs font-semibold text-gray-400">
                                            신부
                                        </DialogTitle>
                                        <DialogTitle className="items-center mt-2 text-sm font-semibold text-gray-600">
                                            장다연
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <FontAwesomeIcon icon={faPhone} className="mx-2 text-gray-600" size="lg" onClick={handleCall.bind(null, '01096563447')}/>
                                            <FontAwesomeIcon icon={faEnvelope} className="mx-2 text-gray-600" size="lg" onClick={handleMessage.bind(null,'01096563447' )}/>
                                        </div>
                                    </div>
                                    <div className="col-span-3 border-b pb-2 border-gray-300">
                                        <div className="flex justify-center">
                                            <div className="  pt-2 px-2 flex justify-center ">
                                                <div className=" mt-2 text-xs font-semibold text-gray-600 flex flex-col" onClick={copy2Clipboard}>
                                                    농협-3510826586663
                                                    <FontAwesomeIcon className="pl-2" icon={faCopy} size="xl"/>
                                                </div>
                                            </div>
                                            <div className="  pt-2 flex justify-center">
                                                <div className="flex items-center justify-center rounded-lg w-28 p-1 col-span-2 mt-2 text-xs font-semibold text-gray-600" style={{
                                                    backgroundColor : "#FEE500"
                                                }}
                                                    onClick={move2DaKakaopay}
                                                >
                                                    카카오페이&nbsp;
                                                    <div className="text-md text-gray-900"style={{
                                                        fontWeight : "900"
                                                    }}>
                                                        송금
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 relative  pt-2 ">
                                        <DialogTitle className="items-start mt-2 text-xs font-semibold text-gray-400">
                                            신부 아버지
                                        </DialogTitle>
                                        <DialogTitle className="items-center mt-2 text-sm font-semibold text-gray-600">
                                            장정일
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <FontAwesomeIcon icon={faPhone} className="mx-2 text-gray-600" size="lg" onClick={handleCall.bind(null, '01098503447')}/>
                                            <FontAwesomeIcon icon={faEnvelope} className="mx-2 text-gray-600" size="lg" onClick={handleMessage.bind(null,'01098503447' )}/>
                                        </div>
                                    </div>
                                    <div className="col-span-3 border-b pb-2 border-gray-300">
                                        <div className="flex justify-center">
                                            <div className="  pt-2 px-2 flex justify-center ">
                                                <DialogTitle className=" mt-2 text-xs font-semibold text-gray-600 " onClick={copy2Clipboard}>
                                                    국민은행-67270201422761
                                                    <FontAwesomeIcon className="pl-2" icon={faCopy} size="xl"/>
                                                </DialogTitle>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 relative  pt-2 ">
                                        <DialogTitle className="items-start mt-2 text-xs font-semibold text-gray-400">
                                            신부 어머니
                                        </DialogTitle>
                                        <DialogTitle className="items-center mt-2 text-sm font-semibold text-gray-600">
                                            이진현
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <FontAwesomeIcon icon={faPhone} className="mx-2 text-gray-600" size="lg" onClick={handleCall.bind(null, '01098603447')}/>
                                            <FontAwesomeIcon icon={faEnvelope} className="mx-2 text-gray-600" size="lg" onClick={handleMessage.bind(null,'01098603447' )}/>
                                        </div>
                                    </div>
                                    <div className="col-span-3 ">
                                        <div className="flex justify-center">
                                            <div className="  pt-2 px-2 flex justify-center ">
                                                <DialogTitle className=" mt-2 text-xs font-semibold text-gray-600 " onClick={copy2Clipboard}>
                                                    국민은행-67270201422761
                                                    <FontAwesomeIcon className="pl-2" icon={faCopy} size="xl"/>
                                                </DialogTitle>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
                </div>
            </div>
    </Dialog>
    )
}