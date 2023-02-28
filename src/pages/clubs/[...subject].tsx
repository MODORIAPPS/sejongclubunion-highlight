import { GetServerSideProps } from "next";
import Head from "next/head";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import ClubItem from "./components/ClubItem";
import SubjectTitle from "./components/SubjectTitle";
import useFetchClubList from "../../hooks/useFetchClubList";
import { isSubjectType, SubjectType } from "../../models/subject.type";

interface ClubsProps {
    subject: SubjectType;
}

const Clubs: React.FC<ClubsProps> = ({ subject }) => {

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
    }

    return (
        <>
            <Head>
                <meta property="og:url" content={"https://find.sejongclubunion.com/clubs/" + subject} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="표시되는 이미지" />
                <meta property="og:title" content={`총동아리연합회 - ${getSubjectName()}분과`} />
                <meta property="og:description" content={`${getSubjectName()}분과 목록을 소개합니다.`} />
            </Head>
            <div className="pt-16">
                <SubjectTitle subject={subject} />
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
                                        if (club.properties.Name.type === "title") {
                                            title = club.properties.Name.title[0].plain_text;
                                        }

                                        let shortDesc = "";
                                        if (club.properties.short_desc.type === "rich_text") {
                                            shortDesc = club.properties.short_desc.rich_text[0].plain_text;
                                        }
                                        return (
                                            <ClubItem
                                                key={title}
                                                logo={logo}
                                                title={title}
                                                shortDesc={shortDesc.substr(0, 50) + "..."} />
                                        );
                                    })
                                }
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<ClubsProps> = async ({ params, req, res }) => {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );

    const subject = params?.subject;

    // data 없을 땐 리턴값을 달리함
    if (!subject || subject.length !== 1 || !isSubjectType(subject[0])) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    const _props: ClubsProps = {
        subject: subject[0]
    }

    return { props: _props };
}

export default Clubs;