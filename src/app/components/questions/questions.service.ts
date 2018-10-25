import {Injectable} from '@angular/core' 
import {HttpClient} from '@angular/common/http';

export interface Question {
    text: String;
    correct_answer: String;
    incorect1: String;
    incorect2: String;
    incorect3: String;
    status: QuestionStatus;
}
  
enum QuestionStatus {
    NotAnswered,
    Correct,
    Incorrect
}

@Injectable()
export class QuestionsService {
    constructor(private http: HttpClient) { }

    url: string = "http://localhost:8000/api/get_questions";

    getQuestions(){
        return this.http.get<Question[]>(this.url);
    };

}