import React from "react";

const TopBar: React.FC = () => {

    const handleClickShare = () => {

    };

    return (
        <div className="fixed z-20 w-full p-5 bg-white flex flex-row justify-between items-center border-b-[1px] border-bg-gray-400">
            <div>
                <img width={24} height={24} className="mr-2 inline-block" src={"/light_logo.png"} />
                <span className="text-[color:var(--color-primary)]">하이라이트</span>
            </div>
            <svg
                onClick={handleClickShare}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 23C5.1 23 4.75 22.85 4.45 22.55C4.15 22.25 4 21.9 4 21.5V8.775C4 8.375 4.15 8.025 4.45 7.725C4.75 7.425 5.1 7.275 5.5 7.275H9.725V8.775H5.5V21.5H18.5V8.775H14.225V7.275H18.5C18.9 7.275 19.25 7.425 19.55 7.725C19.85 8.025 20 8.375 20 8.775V21.5C20 21.9 19.85 22.25 19.55 22.55C19.25 22.85 18.9 23 18.5 23H5.5ZM11.225 15.325V3.9L9.025 6.1L7.95 5.025L11.975 1L16 5.025L14.925 6.1L12.725 3.9V15.325H11.225Z" fill="#2E3238" />
            </svg>
        </div>
    );
};

export default TopBar;