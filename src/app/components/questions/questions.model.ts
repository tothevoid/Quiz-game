export class Question {
    text: String;
    answers: Answer[];
    status: QuestionStatus
}

export interface Answer{
    name: String;
    correct: Boolean
}
  
export enum QuestionStatus {
    notAnswered,
    correct,
    incorrect
}