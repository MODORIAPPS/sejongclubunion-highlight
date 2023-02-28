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
    culture: "f560d95b76ca475185094c2428b3e78e",
    volunteer: "9668c29c3e774aaa931b079d026eb514",
    religion: "7e737cd3c6234d9faf4bd90d8fbe54b1",
    physical: "64fe4023c7c3492ca03e6ee3ae80cf9a",
    academic: "281e0cb8b7ce4d7fa1fe47c7184a4edd"
}