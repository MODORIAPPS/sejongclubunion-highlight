import { SubjectCount, useFormContentContext } from "@/context/FormContentContext";
import FragmentQuestion, { SubjectType } from "@/assets/form/data/fragment";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoadingFragment: React.FC = () => {

    const { result } = useFormContentContext();
    const router = useRouter();

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

    const highestCountObjectName = findHighestCountObjectName(result);
    const questionList = FragmentQuestion[highestCountObjectName as SubjectType];

    const handleClickAnswer = (key: string) => {
        console.log(key);
        router.push("/result/" + key);
    };

    useEffect(() => {
        if (questionList === undefined || questionList.length === 0) {
            router.push("/result/" + highestCountObjectName)
            return;
        }
    }, []);

    return (
        <div className="max-w-xl mx-auto pt-16 h-screen relative">

            <div className="absolute top-[30%] left-[50%] translate-x-[-50%]">
                <div className="relative">
                    <img className="absolute z-[-10] left-[50%] top-[30%] translate-x-[-50%] translate-y-[-30%] w-60 opacity-30 mx-auto" src={"/images/plane-window.png"} />
                    <h1 className="min-w-[350px] z-10 px-6 text-center font-bold text-3xl text-gray-700">
                        거의 다 왔어요. <br />
                        마지막으로 한 가지만 더 여쭤볼게요.
                    </h1>
                </div>
            </div>
            <div className="absolute bottom-4 px-4 w-full">
                <div>
                    {
                        questionList?.map((option) =>
                            <div key={option.key} onClick={() => handleClickAnswer(option.key)} className="p-3 w-full bg-primary-400 mb-2 rounded-2xl active:bg-primary-300 cursor-pointer">
                                <p className="text-center text-white">{option.answer}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};




export default LoadingFragment;