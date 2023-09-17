import { PageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import axios from "axios";
import { useEffect, useState } from "react";
import { SubjectType } from "../models/subject.type";


const useGetClubList = (department?: SubjectType) => {
    const [clubList, setClubList] = useState<Array<PageObjectResponse>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const fetchClubList = async () => {
        try {
            setLoading(true);
            const url = `${process.env.NEXT_PUBLIC_MAIN_WEBSITE}/api/clubs?department=${department ?? ""}`;
            const { data } = await axios.get<QueryDatabaseResponse>(url);
            const clubList = data?.results as Array<PageObjectResponse>;

            // TODO: 오류 메시지 규격화
            if (!clubList) throw Error("지원하지 않는 데이터베이스입니다. 가이드를 확인해주세요.");

            setClubList(clubList);
        } catch (e: any) {
            // TODO: Sentry Report
            setError(e);
            console.log(e);
        } finally { setLoading(false) }
    };

    useEffect(() => {
        fetchClubList();
    }, []);

    return {
        data: clubList,
        loading,
        error
    }
};

export default useGetClubList;