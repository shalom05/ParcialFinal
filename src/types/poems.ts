export type PoemApiResponseType = Array<Poem>

export interface Poem {
  title: string;
  author: string;
  lines: Array<string>;
  linecount: number;
}
