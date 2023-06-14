import React from "react";
import { DepartmentStatus } from "..";
import Head from "next/head";
import Footer from "@/components/Footer";
import MapView from "@/components/MapView";

const Clubs: React.FC = () => {
    return (
        <>
            <Head>
                <title>총동아리연합회 - 중앙동아리</title>
                <meta name="description" content="세종대학교 중앙동아리 소개" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='relative max-w-3xl mx-auto pt-14 mb-10'>
                <DepartmentStatus />
                <MapView />
            </div>
            <Footer />
        </>
    );
};

export default Clubs;