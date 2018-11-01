import {Injectable} from '@angular/core' 
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

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

@Injectable()
export class QuestionsService{
    constructor(private http: HttpClient) { }

    url: string = environment.apiUrl + "api/get_questions/";

    getQuestions(id: Number){
        return this.http.get<Question[]>(this.url+id);
    };

}