import { Component, OnInit, Inject } from '@angular/core';
import { QuestionsService, Question, QuestionStatus } from './questions.service';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  providers: [QuestionsService]
})

export class QuestionsComponent implements OnInit {
    public Service: QuestionsService;
    private currentQuestionNum: number = 0;
    public Questions: Question[] = [];
    public currentQuestion: Question = new Question();
    private correct: number = 0;

    id: number = 0;
    private sub: any;

    QuestionStatus = QuestionStatus;

    constructor(private service: QuestionsService, private router: Router, private route:ActivatedRoute) {
        this.Service = service
    }

    ngOnInit() { 
        this.sub = this.route.params.subscribe(params =>{
            this.id = +params['category']
        })

        this.Service.getQuestions(this.id).subscribe(questions=>{
            this.Questions = questions as Question[];
            if (questions.length == 0){
                console.log('empty response')
            }
            else{
                this.currentQuestion = questions[0]
            }
        })
    };

    answer(event: Event){
        if (this.currentQuestion.correct_answer == event.srcElement.innerHTML){
            this.Questions[this.currentQuestionNum].status = QuestionStatus.correct;
            this.correct+=1
        }
        else{
            this.Questions[this.currentQuestionNum].status = QuestionStatus.incorrect;
        }
        if (this.Questions.length == this.currentQuestionNum+1){
            var result = this.correct+'/'+this.Questions.length
            localStorage.setItem('result',result);
            this.router.navigate(['result'])
        }
        else{
            this.currentQuestionNum+=1;
            this.currentQuestion = this.Questions[this.currentQuestionNum];
        }
    }

}