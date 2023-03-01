import { useFormContentContext } from "@/context/FormContentContext";
import React, { useEffect } from "react";
import { ControllerProps } from "../..";
import ProgressBar from "../../components/ProgressBar";
import formData from "../../data/data.json";

const ContentFragment: React.FC<ControllerProps> = ({ goNext }) => {

    const { currentIndex, setCurrentIndex, countBySubject } = useFormContentContext();
    const { questions } = formData;

    const handleClickAnswer = (index: number) => {
        const weight = questions[currentIndex - 1].options[index].weight;
        for (const subject in weight) {
            countBySubject(subject);
        }
        setCurrentIndex(currentIndex + 1);
    };

    useEffect(() => {
        if (currentIndex === questions.length + 1) {
            goNext();
        }
    }, [currentIndex]);

    return (
        <div className="max-w-xl mx-auto pt-16 h-screen relative">
            <ProgressBar max={questions.length} current={currentIndex} title="내게 맞는 동아리 찾아보기" />

            <div className="absolute top-[30%]">
                <div className="relative">
                    <img className="absolute z-[-10] left-[50%] top-[30%] translate-x-[-50%] translate-y-[-30%] w-60 opacity-30 mx-auto" src={"/images/plane-window.png"} />
                    <h1 className="z-10 px-6 text-center font-bold text-3xl text-gray-700">
                        🧐<br />
                        {questions[currentIndex - 1]?.question}
                    </h1>
                </div>
            </div>
            <div className="absolute bottom-4 px-4 w-full">
                <div>
                    {
                        questions[currentIndex - 1]?.options.map((option, i) =>
                            <FormButton
                                key={i}
                                index={i}
                                onClick={handleClickAnswer}>
                                {option.answer}
                            </FormButton>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

interface FormButtonProps {
    index: number;
    children: string;
    onClick: (index: number) => void;
}

const FormButton: React.FC<FormButtonProps> = (
    {
        index,
        onClick,
        children
    }) => {

    return (
        <div onClick={() => onClick(index)} className="p-3 w-full bg-[#F1CB23] mb-2 rounded-2xl hover:bg-[#d1b01d]">
            <p className="text-center text-white">{children}</p>
        </div>
    );
};

export default ContentFragment;