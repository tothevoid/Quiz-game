import {Injectable} from '@angular/core' 
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Question, Answer, QuestionStatus} from '../questions/questions.service' 

@Injectable()
export class OnlineQuestionsService{
    constructor(private http: HttpClient) { }

    url: string = environment.apiUrl + "api/get_questions_online/";

    getQuestions(id: String){
        return this.http.post<Question[]>(this.url, {id: id})
    };

}