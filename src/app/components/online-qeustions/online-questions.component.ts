import { Component, Inject, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { OnlineQuestionsService } from './online-questions.service';
import { Question, Answer, QuestionStatus } from '../questions/questions.service';
import { Router } from "@angular/router"

export class Response{
    id : String;
    questionNum: Number;
    isCorrect: Boolean; 
    constructor(id: String, questionNum: Number, isCorrect: Boolean) {
        this.id = id;
        this.questionNum = questionNum;
        this.isCorrect = isCorrect;
    }
}

@Component({
    selector: 'online-questions',
    templateUrl: './online-questions.component.html',
    styleUrls: ['./online-questions.component.scss'],
    providers: [OnlineQuestionsService]
})

export class OnlineQuestionsComponent{
    private currentQuestionNum: number = 0;
    public Questions: Question[] = [];
    public currentQuestion: Question = new Question();

    public QuestionsUser: String[] = []
    public QuestionsOpponent: String[] = []

    public Socket: WebSocketSubject<any>;

    constructor(private service: OnlineQuestionsService,  private router: Router){
        this.Socket = webSocket('ws://localhost:2222');
        this.Socket.subscribe(
            (msg) => console.log('message received: ' + msg),
            (err) => console.log(err),
            () => console.log('complete')
        );
    }

    ngOnInit(){
        this.service.getQuestions(localStorage.getItem('id')).subscribe(questions=>{
            this.Questions = questions as Question[];
            if (questions.length == 0){
                console.log('empty response')
            }
            else{
                this.setCurrentQuestion(0)
            }
        })
    }

    setCurrentQuestion(index: number){
        this.currentQuestion = this.Questions[index]
    }

    answer(event: Event){
        let answer = this.currentQuestion.answers.filter(x=>x.correct==true)[0].name;

        let answerResult = false;

        if (answer == event.srcElement.innerHTML){
            this.Questions[this.currentQuestionNum].status = QuestionStatus.correct;
            answerResult = true;
        }
        else{
            this.Questions[this.currentQuestionNum].status = QuestionStatus.incorrect;
        }

        this.Socket.next(new Response(localStorage.getItem('id'), this.currentQuestionNum, answerResult));

        if (this.Questions.length == this.currentQuestionNum+1){
            this.router.navigate(['online-result'])
        }
        else{
            this.currentQuestionNum+=1;
            this.setCurrentQuestion(this.currentQuestionNum)
        }
    }

    

}