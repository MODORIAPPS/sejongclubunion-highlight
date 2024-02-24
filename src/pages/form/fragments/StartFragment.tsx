import React from "react";
import { ControllerProps } from "..";

const StartFragment: React.FC<ControllerProps> = ({ goNext }) => {

    return (
        <>
            <div className="relative h-full overflow-hidden">
                <img src="/sedongje.png" className='object-cover absolute sm:top-0 top-[55px] w-screen h-full' />
                {/* <video
                    poster="/images/aircraft-thumbnail.jpeg"
                    style={{ objectFit: "cover" }}
                    className='absolute sm:top-0 top-[-30%] w-screen h-full'
                    src="/aircraft.mp4" loop autoPlay muted controls={false} playsInline /> */}
                <div className="absolute z-4 w-full h-full bg-gradient-to-t from-[#000000a1] to-[#ffffff00] opacity-90" />

                <div className="w-full text-center  absolute top-[50%]">
                    <p className="mx-auto font-bold text-white text-3xl">
                        <img className='w-12 h-12 inline-block mb-1' src="/toss-emojis/4x/u1F50D.png" />
                        <br />
                        내게 맞는 <br />동아리 찾아보기
                    </p>
                </div>
            </div>
            <div className="absolute bottom-10 px-5 z-10 w-full">
                <p onClick={goNext} className="shadow-xl p-4 mx-auto text-center text-white text-lg font-bold rounded-2xl bg-primary-400 hover:bg-primary-300 cursor-pointer">
                    내게 맞는 동아리 찾아보기
                </p>
            </div>
        </>
    );
};

const TicketTop: React.FC = () => {
    return (
        <div className="bg-[#1a1d29] rounded-xl p-5">
            <div className="mb-6 flex flex-row items-center justify-between text-white">
                <div>
                    <span className="text-sm">BOARDING PASS</span>
                    <p className="text-xl font-bold">FIRST CLASS</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-sm">AIRPORT</span>
                    <p className="text-xl font-bold">SCB</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between text-white text-sm mb-1">
                <span>BOARDING TIME</span>
                <span>09:00 Mar. 6~7 2023</span>
            </div>
            <img src="/images/barcode.png" />
        </div>
    );
};

export default StartFragment;