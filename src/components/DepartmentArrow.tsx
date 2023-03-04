import Link from "next/link";
import React from "react";

interface Props {
    iconUrl: string;
    title: string;
    description: string;
    href: string;
}

const DepartmentArrow: React.FC<Props> = (
    {
        iconUrl,
        title,
        description,
        href
    }
) => {
    return (
        <Link href={href} className="py-4 px-5 flex flex-row justify-between items-center hover:bg-slate-100 rounded-2xl cursor-pointer">
            <div className="container mx-auto flex flex-row">
                <img className='w-8 h-8 inline-block mr-4' src={iconUrl} />
                {/* <p className="text-3xl mr-4">{icon}</p> */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
            <svg className="ml-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.375 18.7204L8.3 17.6505L13.25 12.724L8.3 7.79744L9.375 6.72754L15.4 12.724L9.375 18.7204Z" fill="#6C6C6C" />
            </svg>
        </Link>
    );
};

export default DepartmentArrow;