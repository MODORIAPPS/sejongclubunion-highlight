function generationUnionTypeChecker<UnionType extends string>(...values: UnionType[]) {
    return function (value: unknown): UnionType | false {
        if (typeof value !== 'string') return false;
        return values.includes(value as UnionType) ? value as UnionType : false;
    }
}

/**
 * Notion Database와 연결됨
 */
const subjectType = ["show", "culture", "volunteer", "religion", "physical", "academic"];
export type SubjectType = typeof subjectType[number];

export const isSubjectType = generationUnionTypeChecker(...subjectType);

export const SubjectDBLink: {
    [key in SubjectType]: string
} = {
    show: "d80d3a2915a9403a9807a8825466641e",
    culture: "d80d3a2915a9403a9807a8825466641e",
    volunteer: "d80d3a2915a9403a9807a8825466641e",
    religion: "7e737cd3c6234d9faf4bd90d8fbe54b1",
    physical: "d80d3a2915a9403a9807a8825466641e",
    academic: "d80d3a2915a9403a9807a8825466641e"
}