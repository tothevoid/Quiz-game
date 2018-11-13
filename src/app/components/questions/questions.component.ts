import { Component, OnInit, Inject } from '@angular/core';
import { Question, Answer, QuestionStatus } from './questions.model' 
import { Router } from '@angular/router'
import { interval, Subscription, timer} from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from '../../http.service'
@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  providers: [HttpService]
})

export class QuestionsComponent implements OnInit {
    private currentQuestionNum: number = 0;
    public Questions: Question[] = [];
    public currentQuestion: Question = new Question();
    private correct: number = 0;
    public answerTime: number = 10;
    public timer: Subscription;
    public buttonsBlock: boolean = false;
    id: string;
    QuestionStatus = QuestionStatus;

    constructor(private service: HttpService, private router: Router, private route:ActivatedRoute) {}

    ngOnInit() { 
        this.route.params.subscribe(params =>{
            this.id = params['category']
        })
        this.service.getByParam<Question>('get_questions',this.id).subscribe(questions=>{
            this.Questions = questions as Question[];
            if (questions.length == 0){
                console.log('empty response')
            }
            else{
                this.setCurrentQuestion(0);
                this.timer = interval(1000).subscribe((x)=>{
                    if (!this.buttonsBlock)
                        this.answerTime = this.answerTime - 1;
                    document.getElementById('time').style.width = (this.answerTime * 10) + '%'
                    if (this.answerTime == 0){
                        this.Questions[this.currentQuestionNum].status = QuestionStatus.incorrect;
                        this.endGameCheck()
                    }
                })
            }
        })
    };

    ngOnDestroy(){
        this.timer.unsubscribe()
    }

    setCurrentQuestion(index: number){
        this.currentQuestion = this.Questions[index]
    }

    answer(event: Event){
        if (this.buttonsBlock)
            return;
        else{
            var answer = this.currentQuestion.answers.filter(x=>x.correct==true)[0].name;
            if (answer == event.srcElement.innerHTML){
                this.Questions[this.currentQuestionNum].status = QuestionStatus.correct;
                event.srcElement.classList.add('answer-correct')
                this.correct+=1
            }
            else{
                this.Questions[this.currentQuestionNum].status = QuestionStatus.incorrect;
                event.srcElement.classList.add('answer-incorrect')
            }
            this.buttonsBlock = true
            console.log('new event')
            var blocker = timer(750).subscribe(x => {
                event.srcElement.classList.remove('answer-incorrect','answer-correct')
                this.buttonsBlock = false
                this.endGameCheck()
            })
        }
    }

    endGameCheck(){
        if (this.Questions.length == this.currentQuestionNum+1){
            var result = this.correct+'/'+this.Questions.length
            sessionStorage.setItem('result',result);
            this.router.navigate(['result'])
        }
        else{
            this.currentQuestionNum+=1;
            this.setCurrentQuestion(this.currentQuestionNum)
            this.answerTime = 10;
        }
    }
}