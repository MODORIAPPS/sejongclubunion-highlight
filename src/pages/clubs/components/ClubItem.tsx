import { SubjectType } from "@/models/subject.type";
import React from "react";
import { getSubjectObject } from "../[subject]";
import clubs from "@/assets/clubs";
import { darkenColor, hexToRGBA } from "@/utils/color";

export interface ClubItemProps {
    logo: string;
    title: string;
    shortDesc: string;
    subject: SubjectType
}

const ClubItem: React.FC<ClubItemProps> = ({ logo, title, shortDesc, subject }) => {

    const handleClickItem = () => {
        // window.open(`https://www.instagram.com/p/${getSubjectObject(subject, title).pageId}`);
    };

    const getArea = () => {
        const index = clubs.findIndex((c) => c.title === title);
        if (index === -1) return;

        const img = clubs[index].logo_img;
        const text = img.split("/")[1];
        switch (text) {
            case "first-ri":
                return 1;
            case "second-ri":
                return 2;
            case "third-ri":
                return 3;
            case "fourth-ri":
                return 4;
            case "fifth-ri":
                return 5;
            case "sixth-ri":
                return 6;
            default:
                return 1;
        }
    };

    return (
        <div onClick={handleClickItem} className="px-4 py-4 flex flex-row hover:bg-slate-100 rounded-2xl cursor-pointer">
            <img alt="logo" className="min-w-[64px] w-16 h-16 object-contain mr-6 rounded-lg" src={logo} />
            <div className="flex flex-col flex-1">
                <div className="flex flex-row items-center justify-between mb-1">
                    <p className="font-bold text-xl mb-1 text-gray-700">{title}</p>
                    <AreaBadge area={getArea()} />
                </div>
                <p className="text-gray-500 mb-2">{shortDesc}</p>
                <div className="flex">
                    <p className="p-2 text-xs font-bold text-blue-800 bg-blue-100 rounded-lg">지원하기</p>
                </div>
            </div>
        </div>
    );
};

const AreaBadge: React.FC<{ area: number; }> = ({ area }) => {
    let color = '';

    switch (area) {
        case 1:
            color = '#EEA5A1';
            break;
        case 2:
            color = '#FBD952';
            break;
        case 3:
            color = '#E98240';
            break;
        case 4:
            color = '#6CC3E2';
            break;
        case 5:
            color = '#8DC041';
            break;
        case 6:
            color = '#AD6DA0';
            break;
        default:
            color = '#000000';
            break;
    }

    if (color === '#000000') return <></>;

    return (
        <p
            style={{ backgroundColor: hexToRGBA(color, 0.2), color: darkenColor(color, 50) }}
            className={`px-2 py-1 text-xs font-bold rounded-lg`}>
            동화 {area}리
        </p>
    );
};

export default ClubItem;