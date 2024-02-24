import { SubjectType } from "@/models/subject.type";
import React from "react";
import { getSubjectObject } from "../[subject]";

export interface ClubItemProps {
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
            <img alt="logo" className="min-w-[64px] w-16 h-16 object-contain mr-6 rounded-lg" src={logo} />
            <div className="flex flex-col flex-1">
                <div className="flex flex-row items-center justify-between mb-1">
                    <p className="font-bold text-xl mb-1 text-gray-700">{title}</p>
                    {/* <DepartmentBadge department={subject} /> */}
                </div>
                <p className="text-gray-500 mb-2">{shortDesc}</p>
                {/* <div className="flex">
                    <p className="p-2 text-xs font-bold text-blue-800 bg-blue-100 rounded-lg">지원하기</p>
                </div> */}
            </div>
        </div>
    );
};

const DepartmentBadge: React.FC<{ department: SubjectType; }> = ({ department }) => {
    let bgColor = '';
    let textColor = '';
    let text = '';

    switch (department) {
        case 'show':
            bgColor = 'bg-orange-100';
            textColor = 'text-orange-800';
            text = '공연분과'
            break;
        case 'religion':
            bgColor = 'bg-red-100';
            textColor = 'text-red-800';
            text = '종교분과'
            break;
        case 'culture':
            bgColor = 'bg-blue-100';
            textColor = 'text-blue-800';
            text = '문화분과'
            break;
        case 'academy':
            bgColor = 'bg-purple-100';
            textColor = 'text-purple-800';
            text = '학술분과'
            break;
        case 'volunteer':
            bgColor = 'bg-green-100';
            textColor = 'text-green-800';
            text = '봉사분과'
            break;
        case 'physical':
            bgColor = 'bg-gray-100';
            textColor = 'text-gray-800';
            text = '체육분과'
            break;
        default:
            break;
    }

    return (
        <p className={`p-2 text-xs font-bold rounded-lg ${bgColor} ${textColor}`}>
            {text}
        </p>
    );
};

export default ClubItem;