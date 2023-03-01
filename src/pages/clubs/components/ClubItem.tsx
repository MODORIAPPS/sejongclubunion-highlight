import { SubjectType } from "@/models/subject.type";
import Image from "next/image";
import React from "react";
import { getSubjectObject } from "../[subject]";

interface ClubItemProps {
    logo: string;
    title: string;
    shortDesc: string;
    subject: SubjectType
}

const ClubItem: React.FC<ClubItemProps> = ({ logo, title, shortDesc, subject }) => {

    const handleClickItem = () => {
        window.open(`https://www.instagram.com/p/${getSubjectObject(subject, title).pageId}`);
    };

    return (
        <div onClick={handleClickItem} className="px-4 py-4 flex flex-row hover:bg-slate-100 rounded-2xl cursor-pointer">
            <Image alt="logo" width={64} height={64} className="min-w-[64px] w-16 h-16 object-contain mr-6 rounded-lg" src={logo} />
            <div className="flex flex-col">
                <p className="font-bold text-xl mb-1 text-gray-700">{title}</p>
                <p className="text-gray-500 mb-2">{shortDesc}</p>
                <div className="flex">
                    <p className="p-2 text-xs font-bold text-[#F1CB23] bg-[#f1cb2346] rounded-lg">지원하기</p>
                </div>
            </div>
        </div>
    );
};

export default ClubItem;