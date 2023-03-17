import Footer from "@/components/Footer";
import MapView from "@/components/MapView";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import useFetchClubList from "../../../hooks/useFetchClubList";
import { isSubjectType, SubjectType } from "../../../models/subject.type";
import ClubItem from "../components/ClubItem";
import SubjectTitle from "../components/SubjectTitle";

interface ClubsProps {
    subject: SubjectType;
}

const Clubs: React.FC<ClubsProps> = ({ subject }) => {

    const { query } = useRouter();
    const { data: clubList, loading } = useFetchClubList(subject);

    const getSubjectName = () => {
        switch (subject) {
            case "show": return "공연";
            case "culture": return "문화";
            case "volunteer": return "봉사";
            case "religion": return "종교";
            case "physical": return "체육";
            case "academic": return "학술";
            default: return "";
        }
    };

    return (
        <>
            <Head>
                <title>{`총동아리연합회 - ${getSubjectName()}분과`}</title>
                <meta property="og:url" content={"https://find.sejongclubunion.com/clubs/" + subject} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`총동아리연합회 - ${getSubjectName()}분과`} />
                <meta property="og:description" content={`${getSubjectName()}분과 목록을 소개합니다.`} />
            </Head>
            <div className="max-w-3xl mx-auto pt-16">
                {query.form && <FindMyTypeBanner subject={subject} />}
                <SubjectTitle subject={subject} />
                <RecruitBanner subject={subject} />
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
                                {
                                    clubList.map(club => {
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

                                        if (!logo || !title || !shortDesc) return <></>;

                                        return (
                                            <ClubItem
                                                key={title}
                                                logo={logo}
                                                title={title}
                                                shortDesc={shortDesc}
                                                subject={subject}
                                            />
                                        );
                                    })
                                }
                            </>
                    }
                </div>
                <MapView />
                <Footer />
            </div>
        </>
    );
};

const FindMyTypeBanner: React.FC<{ subject: SubjectType }> = ({ subject }) => {

    const { iconUrl, text } = getSubjectObject(subject);

    return (
        <div className="mt-4 flex items-center justify-between px-4 py-4 bg-[#5da5da] rounded-2xl cursor-pointer">
            <div className="flex flex-col text-white">
                <p className="font-bold">
                    <img className="w-4 h-4 inline-block mr-2" src={iconUrl} />
                    {text}
                    동아리가 어울리시는 것 같아요!
                </p>
                <span className="ml-6 text-xs">각 동아리를 누르시면 총동아리연합회 인스타그램으로 연결됩니다</span>
            </div>
        </div>
    );
};

interface SubjectObject {
    iconUrl: string;

    /** Instagram PageId */
    pageId: string;

    text: string;
}
const RecruitBanner: React.FC<{ subject: SubjectType }> = ({ subject }) => {

    const { iconUrl, pageId, text } = getSubjectObject(subject);

    const handleClickBanner = () => {
        window.open(`https://www.instagram.com/p/${pageId}`);
    };

    return (
        <div onClick={handleClickBanner} className="flex items-center justify-between px-4 py-4 bg-[#ffdf53] rounded-2xl cursor-pointer">
            <div className="flex flex-col">
                <p className="font-bold text-gray-700">
                    <img className="w-4 h-4 inline-block mr-2" src={iconUrl} />
                    {text} 동아리의 모집기간을 확인하세요!
                </p>
                <span className="ml-6 text-xs text-gray-600">총동아리연합회 인스타그램으로 연결됩니다</span>
            </div>
            <svg fill="gray" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
                <path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z" />
            </svg>
        </div>
    );
};

export const getSubjectObject = (subject: SubjectType, physicalClubName?: string): SubjectObject => {

    // 체육분과 인스타그램 Type1
    const physicalType1List = ["세종스키", "산악부", "세종킹스", "요트부", "FC해례본"];
    if (physicalClubName && subject === "physical" && physicalType1List.indexOf(physicalClubName) > -1) {
        return {
            iconUrl: "/toss-emojis/4x/u1F4AA.png",
            pageId: "CpNdSG_vrDc",
            text: "체육분과"
        };
    }

    switch (subject) {
        case "show": return {
            iconUrl: "/toss-emojis/4x/u1F3A4.png",
            pageId: "CpNUW-TPlmr",
            text: "공연분과"
        };
        case "culture": return {
            iconUrl: "/toss-emojis/4x/u1F33C.png",
            pageId: "CpNT_a6P77T",
            text: "문화분과"
        };
        case "volunteer": return {
            iconUrl: "/toss-emojis/4x/u1F9DA.png",
            pageId: "CpNUorRvuKr",
            text: "봉사분과"
        };
        case "religion": return {
            iconUrl: "/toss-emojis/4x/u1F64F.png",
            pageId: "CpNXoJoPmKE",
            text: "종교분과"
        };
        case "physical": return {
            iconUrl: "/toss-emojis/4x/u1F4AA.png",
            // 체육분과 인스타그램 Type2
            pageId: "CpNdWBxPsZ3",
            text: "체육분과"
        };
        case "academic": return {
            iconUrl: "/toss-emojis/4x/u1F4D6.png",
            pageId: "CpNdh_dvXDD",
            text: "학술분과"
        };
        default: return {
            iconUrl: "/toss-emojis/4x/u1F4D6.png",
            pageId: "CpNUW-TPlmr",
            text: "공연분과"
        };
    }
}

export const getServerSideProps: GetServerSideProps<ClubsProps> = async ({ params, req, res }) => {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );

    const subject = params?.subject;

    // data 없을 땐 리턴값을 달리함
    if (!subject || typeof subject !== "string" || !isSubjectType(subject)) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    const _props: ClubsProps = {
        subject
    }

    return { props: _props };
}

export default Clubs;