import FormContentContextProvider from "@/context/FormContentContext";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ContentFragment from "./fragments/ContentFragment";
import LoadingFragment from "./fragments/LoadingFragment";
import StartFragment from "./fragments/StartFragment";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export interface ControllerProps {
    goNext: () => void;
}

const Form: React.FC = () => {

    const router = useRouter();
    const [page, setPage] = useState<"intro" | "content" | "loading">("intro");

    const renderFragments = () => {
        switch (page) {
            case "intro": return <StartFragment goNext={() => setPage("content")} />;
            case "content": return <ContentFragment goNext={() => setPage("loading")} />;
            case "loading": return <LoadingFragment />;
            default: return <ContentFragment goNext={() => setPage("loading")} />;
        }
    };

    useEffect(() => {
        router.push('/');
        toast.info('준비중입니다. 개발자가 열심히 준비중이에요!');
    }, []);

    return (
        <>
            <Head>
                <title>{`나에게 맞는 동아리 찾기`}</title>
                <meta property="og:url" content={"https://find.sejongclubunion.com/form/"} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`총동아리연합회 - 나에게 맞는 동아리 찾기`} />
                <meta property="og:description" content={`나에게 맞는 동아리를 찾아보아요!`} />
            </Head>
            <FormContentContextProvider>
                {renderFragments()}
            </FormContentContextProvider>
        </>
    );
};

export default Form;