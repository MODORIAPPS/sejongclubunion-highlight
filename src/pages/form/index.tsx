import FormContentContextProvider from "@/context/FormContentContext";
import Head from "next/head";
import React, { useState } from "react";
import ContentFragment from "./fragments/ContentFragment";
import LoadingFragment from "./fragments/LoadingFragment";
import StartFragment from "./fragments/StartFragment";

export interface ControllerProps {
    goNext: () => void;
}

const Form: React.FC = () => {

    const [page, setPage] = useState<"intro" | "content" | "loading">("intro");

    const renderFragments = () => {
        switch (page) {
            case "intro": return <StartFragment goNext={() => setPage("content")} />;
            case "content": return <ContentFragment goNext={() => setPage("loading")} />;
            case "loading": return <LoadingFragment />;
            default: return <ContentFragment goNext={() => setPage("loading")} />;
        }
    };

    return (
        <>
            <Head>
                <meta property="og:url" content={"https://find.sejongclubunion.com/form/"} />
                <meta property="og:type" content="website" />
                {/* <meta property="og:image" content="표시되는 이미지" /> */}
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