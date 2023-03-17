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
    show: "1d20a01c492147fa969187a2d2984085",
    culture: "556bacdab0d146d192e028ea560e89f9",
    volunteer: "63a8b00c93444741a5e87ac641d1c01b",
    religion: "493d3d047a58489fb433fb0769d2e88a",
    physical: "c92d71331156412b89e6c431004ad165",
    academic: "c36bd7ccb7e14cb8ad0902a0167f5d16"
}