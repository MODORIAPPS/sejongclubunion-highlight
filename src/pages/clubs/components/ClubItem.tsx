import React from "react";

interface ClubItemProps {
    logo: string;
    title: string;
    shortDesc: string;
}

const ClubItem: React.FC<ClubItemProps> = ({ logo, title, shortDesc }) => {
    return (
        <div className="px-4 py-4 flex flex-row hover:bg-slate-100 rounded-2xl cursor-pointer">
            <img className="min-w-[64px] w-16 h-16 object-contain mr-6 rounded-lg" src={logo} />
            <div className="flex flex-col">
                <p className="font-bold text-xl mb-1 text-gray-700">{title}</p>
                <p className="text-gray-500">{shortDesc}</p>
            </div>
        </div>
    );
};

export default ClubItem;