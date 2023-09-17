import useWindowDimensions from "@/hooks/useWindowDimensions";
import React, { useEffect, useMemo, useState } from "react";

interface ProgressBarProps {
    current: number;
    max: number;
    title: string;
}

const ProgressBar: React.FC<ProgressBarProps> = (
    {
        current,
        max,
        title
    }
) => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const progressBg = window.document.getElementById("progress-bg");
        if (!progressBg) return;

        const myObserver = new ResizeObserver(() => {
            setWidth(progressBg.clientWidth);
        });
        myObserver.observe(progressBg);

        return () => {
            myObserver.unobserve(progressBg);
        };
    }, []);

    const slideWidth = useMemo(() => ((width) / max) * (current), [width, current]);

    return (
        <div className="w-full h-14 px-6 py-2">
            <p className="font-bold text-center text-gray-700">{title}</p>
            <div className="flex flex-row items-center w-full">
                <div className="w-full flex-1 relative">
                    <div style={{ width: slideWidth }} className="absolute h-[10px] bg-[#F1CB23] rounded-lg transition-all duration-500" />
                    <img style={{ left: slideWidth - 10 }} className="absolute w-8 h-8 bottom-[-13px] transition-all duration-500" src="/images/airplane.png" />
                    <div id="progress-bg" className="w-full h-[10px] bg-[#D9D9D9] rounded-lg" />
                </div>
                <p className="text-gray-800 ml-4 text-lg text-center">
                    {(current > max ? max : current)}/{max}
                </p>
            </div>
        </div>
    );
};

export default ProgressBar;