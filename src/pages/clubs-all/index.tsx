import Footer from "@/components/Footer";
import useGetClubList from "@/hooks/useGetClubList";
import Head from "next/head";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ClubItem, { ClubItemProps } from "../clubs/components/ClubItem";
import { SubjectType } from "@/models/subject.type";
import MapView from "@/components/MapView";
import { useMemo } from "react";
import Link from "next/link";

/**
 * 모든 동아리 목록을 한 번에 보여주는 페이지
 */
const Clubs: React.FC = () => {

    const { data: clubList, loading } = useGetClubList();

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
                <title>총동아리연합회 - 중앙동아리</title>
                <meta name="description" content="세종대학교 중앙동아리 분과별로 보기" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='relative max-w-3xl mx-auto pt-14 mb-10'>
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
                                        세종대학교에는 총 {filteredClubList.length}개의 중앙동아리가 있어요.
                                    </h2>
                                </div>
                                <div className='mb-8 px-5'>
                                    <Link href={"/clubs"} className='text bg-blue-100 hover:bg-blue-200 text-blue-500 px-2 py-1 rounded-lg cursor-pointer transition-all font-bold'>
                                        중앙동아리 분과별로 보기
                                    </Link>
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
                <MapView />
            </div>
            <Footer />
        </>
    );
};

export default Clubs;