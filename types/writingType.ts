export type WritingType={
    id:number,
    value:string,
    label:string,
    min_words:number,
    max_words:number
}

const defaultWritingType: WritingType = {
    id: 0,
    value: "",
    label: "",
    min_words: 0,
    max_words: 0
};

export default defaultWritingType;