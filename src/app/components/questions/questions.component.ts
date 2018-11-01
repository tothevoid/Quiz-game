import { Component, OnInit, Inject } from '@angular/core';
import { QuestionsService, Question, QuestionStatus, Answer } from './questions.service';
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
                this.setCurrentQuestion(0)
            }
        })
    };

    setCurrentQuestion(index: number){
        this.currentQuestion = this.Questions[index]
    }

    answer(event: Event){
        var answer = this.currentQuestion.answers.filter(x=>x.correct==true)[0].name;

        if (answer == event.srcElement.innerHTML){
            this.Questions[this.currentQuestionNum].status = QuestionStatus.correct;
            this.correct+=1
        }
        else{
            this.Questions[this.currentQuestionNum].status = QuestionStatus.incorrect;
        }
        if (this.Questions.length == this.currentQuestionNum+1){
            var result = this.correct+'/'+this.Questions.length
            sessionStorage.setItem('result',result);
            this.router.navigate(['result'])
        }
        else{
            this.currentQuestionNum+=1;
            this.setCurrentQuestion(this.currentQuestionNum)
        }
    }

    shuffle(array:Answer[]) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }

}