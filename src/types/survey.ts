import { Connection } from "./connection";
import { Question } from "./question";

export interface Survey {
    questions: Question[];
    connections: Connection[];
}