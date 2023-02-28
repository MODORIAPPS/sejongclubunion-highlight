export interface FormData {
    questions: Array<Question>;
}

interface Question {
    question: string;
    options: Array<Option>;
}

interface Option {
    answer: string;
    weight: {
        [key in SubjectType]: number;
    }
}

export type SubjectType =
    "Academic" |
    "Art" |
    "Artistic" |
    "Atheletic" |
    "Religious" |
    "Service";