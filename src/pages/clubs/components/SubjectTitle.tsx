import { isSubjectType, SubjectType } from "../../../models/subject.type";

interface SubjectTitleProps {
    subject: SubjectType
}

const SubjectTitle: React.FC<SubjectTitleProps> = ({
    subject
}) => {
    if (!isSubjectType(subject)) return <></>;
    
    return (
        <div className="mx-4 my-8">
            <h2 className="text-3xl font-bold text-gray-700 mb-3">
                <img className="w-8 h-8 inline-block mr-4" src={textContent[subject].iconUrl} />
                {textContent[subject].title}
            </h2>
            <p className="text-lg text-gray-600">{textContent[subject].description}</p>
        </div>
    );
};

const textContent: {
    [key in SubjectType]: {
        iconUrl: string;
        title: string;
        description: string;
    }
} = {
    show: {
        iconUrl: "/toss-emojis/4x/u1F3A4.png",
        title: "공연분과",
        description: "공연분과는 무대 예술 발표와 관련된 활동을 하며, 연극, 댄스, 음악 등 다양한 공연에 참여합니다. 공연 분과는 창작물 제작과 공연을 통해 자신의 예술적 감성을 표현하고, 또한 공연 활동을 통해 인간관계와 소통 능력을 기를 수 있습니다."
    },
    culture: {
        iconUrl: "/toss-emojis/4x/u1F33C.png",
        title: "문화분과",
        description: "문화분과는 다양한 문화 체험 활동을 하며, 독서 모임, 문화 예술 전시, 인문학 강좌, 문화 이해와 함께 예술적 감성을 기를 수 있습니다. 또한, 문화 체험을 통해 사회, 세계의 다양성을 이해하고, 문화교류 활동을 통해 친목도 쌓을 수 있습니다."
    },
    volunteer: {
        iconUrl: "/toss-emojis/4x/u1F9DA.png",
        title: "봉사분과",
        description: "봉사분과는 다양한 봉사활동을 통해 사회 나눔 활동을 실천합니다. 지역사회에서의 봉사활동을 통해 감성적인 연결고리를 만들고, 사회적 가치와 인간애를 키울 수 있습니다."
    },
    religion: {
        iconUrl: "/toss-emojis/4x/u1F64F.png",
        title: "종교분과",
        description: "종교분과는 다양한 종교 체험과 신앙 생활을 중심으로 활동합니다. 예배나 기도, 성경공부, 선교활동 등을 통해 종교적인 가치와 신앙을 나누며, 서로의 종교에 대한 이해를 높이는데에도 기여할 수 있습니다."
    },
    physical: {
        iconUrl: "/toss-emojis/4x/u1F4AA.png",
        title: "체육분과",
        description: "체육분과는 다양한 운동 활동을 하며, 스포츠 대회에 참여하거나 체육 대회 등 다양한 대회를 개최합니다. 운동을 통해 건강한 신체와 건강한 마음을 가질 수 있으며, 동시에 체력적인 측면뿐만 아니라, 리더십과 협동심도 기를 수 있습니다."
    },
    academic: {
        iconUrl: "/toss-emojis/4x/u1F4D6.png",
        title: "학술분과",
        description: "학술분과는 학문적인 연구와 학술적인 활동을 주로 합니다. 세미나, 강연, 학술 대회 등을 통해 학문적 지식과 실무적 지식을 습득할 수 있습니다."
    }
};

export default SubjectTitle;