import AcademicAnswers from './academic';
import CultureAnswers from './culture';
import PhysicalAnswers from './physical';
import ShowAnswers from './show';

export interface FragmentQuestionType {
    key: string;
    answer: string;
}

export type SubjectType = "show" | "culture" | "volunteer" | "religion" | "physical" | "academic";

const fragmentQuestionMap: { [key in SubjectType]: FragmentQuestionType[] } = {
    academic: AcademicAnswers,
    culture: CultureAnswers,
    physical: PhysicalAnswers,
    show: ShowAnswers,
    volunteer: [],
    religion: []
};

export default fragmentQuestionMap;