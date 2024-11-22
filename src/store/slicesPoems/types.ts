import { PoemApiResponseType, Poem } from "../../types/poems";

export interface poemSliceTypes {
    poemData: PoemApiResponseType,
    poemDetailToShow: undefined | Poem
}