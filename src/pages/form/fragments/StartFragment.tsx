import React from "react";
import { ControllerProps } from "..";

const StartFragment: React.FC<ControllerProps> = ({ goNext }) => {

    return (
        <>
            <div className="relative h-full">
                <video
                    poster="/images/aircraft-thumbnail.jpeg"
                    style={{ objectFit: "cover" }}
                    className='absolute sm:top-0 top-[-30%] w-screen h-full'
                    src="/aircraft.mp4" loop autoPlay muted controls={false} playsInline />
                <div className="absolute z-4 w-full h-full bg-gradient-to-t from-[#00000091] to-[#ffffff00] opacity-90" />

                <div className="w-full text-center  absolute top-[20%]">
                    <p className="mx-auto font-bold text-white text-3xl">
                        <img className='w-8 h-8 inline-block' src="/toss-emojis/4x/u1F50D.png" />
                        <br />
                        내게 맞는 <br />동아리 찾아보기
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 z-10 w-full ">
                <div className="max-w-xl mx-auto rounded-t-3xl">
                    <TicketTop />
                    <TicketBottom goNext={goNext} />
                </div>
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
}

const TicketBottom: React.FC<ControllerProps> = ({ goNext }) => {

    const seatNumber = Math.floor(Math.random() * 90) + 10;

    return (
        <div className="bg-slate-100 rounded-xl p-5">
            <div className="mb-6 flex flex-row items-center justify-between text-gray-600">
                <div>
                    <span className="text-sm font-bold">FROM</span>
                    <p className="text-3xl font-bold">SJU</p>
                    <span className="text-xs font-bold">SEJONG UNIVERSITY</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-sm">AIRPORT</span>
                    <p className="text-3xl font-bold">SCB</p>
                    <span className="text-xs font-bold">SEJONG CLUBUNION</span>
                </div>
            </div>
            <div className="mb-6 flex flex-row items-center justify-around text-gray-600">
                <div>
                    <span className="text-sm">FLIGHT</span>
                    <p className="text-sm font-bold">HI0306</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-sm">GATE</span>
                    <p className="text-sm font-bold">L41</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-sm">SEAT NO.</span>
                    <p className="text-sm font-bold">A{seatNumber}</p>
                </div>
            </div>
            <p onClick={goNext} className="absolute bottom-4 shadow-xl p-3 left-[50%] translate-x-[-50%] min-w-[200px] mx-auto text-center text-white font-bold rounded-2xl bg-primary-400 hover:bg-primary-300 cursor-pointer">
                내게 맞는 동아리 찾아보기
            </p>
        </div>
    );
};

export default StartFragment;