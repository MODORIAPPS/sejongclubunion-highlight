import { SubjectCount, useFormContentContext } from "@/context/FormContentContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Lottie from 'react-lottie';
import * as animationData from "../data/airplane-lottie.json";

const LoadingFragment: React.FC = () => {

    const { result } = useFormContentContext();
    const router = useRouter();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    const findHighestCountObjectName = (array: SubjectCount[]) => {
        let highestCount = 0;
        let highestCountObjName = "";

        for (let i = 0; i < array.length; i++) {
            if (array[i].count > highestCount) {
                highestCount = array[i].count;
                highestCountObjName = array[i].name;
            }
        }

        return highestCountObjName;
    }

    useEffect(() => {
        setTimeout(() => {
            // router.push("/form/result/" + findHighestCountObjectName(result));
            router.push("/clubs/" + findHighestCountObjectName(result) + "/form=scu");
        }, 3000);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <Lottie
                    options={defaultOptions}
                    width={"100%"}
                />
                <p className="text-center text-3xl font-bold text-gray-700 mt-6">
                    딱 맞는 동아리를 <br />
                    찾고 있어요
                </p>
            </div>
        </div>
    );
};




export default LoadingFragment;