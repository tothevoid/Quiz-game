import {Injectable} from '@angular/core' 
import {HttpClient} from '@angular/common/http';

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
export class QuestionsService {
    constructor(private http: HttpClient) { }

    url: string = "http://192.168.100.8:8000/api/get_questions";

    getQuestions(){
        return this.http.get<Question[]>(this.url);
    };

}