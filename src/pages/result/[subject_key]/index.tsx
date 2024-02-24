import Footer from "@/components/Footer";
import MapView from "@/components/MapView";
import useGetClubList from "@/hooks/useGetClubList";
import { SubjectType } from "@/models/subject.type";
import ClubItem, { ClubItemProps } from "@/pages/clubs/components/ClubItem";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useMemo } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface ResultProps {
    subject_key: string;
}

const Clubs: React.FC<ResultProps> = ({ subject_key }) => {

    const { data: clubList, loading } = useGetClubList({ subject_key });

    const filteredClubList: ClubItemProps[] = useMemo(() => {
        if (!clubList) return [];
        return clubList
            .filter(club => {
                return (
                    club?.cover?.type === "file" &&
                    club?.properties?.Name?.type === "title" &&
                    club.properties.Name.title.length > 0 &&
                    club?.properties?.short_desc?.type === "rich_text" &&
                    club.properties.short_desc.rich_text.length > 0 &&
                    club?.properties?.department?.type === "multi_select" &&
                    club.properties.department.multi_select.length > 0
                );
            })
            .map(club => {
                let logo = "";
                if (club?.cover?.type === "file") {
                    logo = club.cover.file.url;
                }

                let title = "";
                if (club?.properties?.Name?.type === "title" && club.properties.Name.title.length > 0) {
                    title = club.properties.Name.title[0].plain_text;
                }

                let shortDesc = "";
                if (club?.properties?.short_desc?.type === "rich_text" && club.properties.short_desc.rich_text.length > 0) {
                    shortDesc = club.properties.short_desc.rich_text[0].plain_text;
                }

                let department: SubjectType = "show";
                if (club?.properties?.department?.type === "multi_select" && club.properties.department.multi_select.length > 0) {
                    department = club.properties.department.multi_select[0].name as SubjectType;
                }

                return ({
                    logo,
                    title,
                    shortDesc,
                    subject: department
                });
            }
            );
    }, [clubList]);

    return (
        <>
            <Head>
                <title>내게 맞는 동아리</title>
                <meta name="description" content="내게 맞는 동아리를 찾았어요" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="screen-capture-area" className='relative max-w-3xl mx-auto pt-24 mb-12'>
                <div className="flex flex-col px-4 relative">
                    <img src="/images/hwayangi.svg" alt="화양이" className="w-36" />
                    <img src="/images/donebaki.svg" alt="화양이" className=" absolute bottom-[-30px] self-end w-24 h-24" />
                </div>

                <div className="my-8">
                    {
                        loading ?
                            <SkeletonTheme baseColor="#efefef" highlightColor="#e3e3e3">
                                <p className="px-4">
                                    <Skeleton className="mb-4 rounded-2xl" height={130} count={6} />
                                </p>
                            </SkeletonTheme>
                            :
                            <>
                                <div className="mx-4 mt-12 mb-3">
                                    <h2 className="text-2xl font-bold text-gray-700 mb-3">
                                        <span className="text-primary-400">
                                            {filteredClubList.length}개
                                        </span>의 어울리는 동아리를 찾았어요!
                                    </h2>
                                </div>
                                {
                                    filteredClubList.map(club => {
                                        const { logo, title, shortDesc, subject: department } = club;
                                        return (
                                            <ClubItem
                                                key={title}
                                                logo={logo}
                                                title={title}
                                                shortDesc={shortDesc}
                                                subject={department}
                                            />
                                        );
                                    })
                                }
                            </>
                    }
                </div>
                <div className="w-full h-1 bg-slate-100" />
                <div className='my-8 flex flex-row justify-center'>
                    <Link href={"/clubs-all"} className='text-xl inline-block mx-auto bg-primary-400 text-white px-6 py-3 rounded-2xl cursor-pointer transition-all font-medium'>
                        세종대학교의 모든 동아리 보기
                    </Link>
                </div>
                <MapView />
            </div>
            <Footer />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<ResultProps> = async ({ params, req, res }) => {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );

    console.log("params", params)

    const subject_key = params?.subject_key;

    // data 없을 땐 리턴값을 달리함
    if (!subject_key || typeof subject_key !== "string") {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    const _props: ResultProps = {
        subject_key
    }

    return { props: _props };
}

export default Clubs;