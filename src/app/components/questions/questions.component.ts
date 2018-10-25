import { Component, OnInit, Inject } from '@angular/core';
import { QuestionsService, Question } from './questions.service';

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
    
    constructor(private service: QuestionsService) {
        this.Service = service
    }

    ngOnInit() { 
        this.Service.getQuestions().subscribe(questions=>{
            this.Questions = questions as Question[];
            console.log(questions)
        })
    };
  
}