import {Injectable} from '@angular/core' 
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
export class Question {
    text: String;
    correct_answer: String;
    incorect1: String;
    incorect2: String;
    incorect3: String;
    status: QuestionStatus = QuestionStatus.notAnswered;
}
  
export enum QuestionStatus {
    notAnswered,
    correct,
    incorrect
}

@Injectable()
export class QuestionsService{
    constructor(private http: HttpClient) { }

    url: string = environment.apiUrl + "get_questions/";

    getQuestions(id: Number){
        return this.http.get<Question[]>(this.url+id);
    };

}