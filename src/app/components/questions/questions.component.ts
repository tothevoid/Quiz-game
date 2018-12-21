import { Component, OnInit, Inject } from '@angular/core';
import { Question, Answer, QuestionStatus } from './questions.model' 
import { Router } from '@angular/router'
import { interval, Subscription, timer} from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from '../../http.service'
import { questionData, answerData } from '../../offlineData'

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
        console.log('server questions')
        this.service.getByParam<Question>('get_questions',this.id).subscribe(questions=>{
            console.log('online questions')
            this.Questions = questions as Question[];                        
            this.startGame();  
        }, error => {
        console.log('offline questions')
        this.Questions = this.genRandomQuestions()
        this.startGame(); 
    })
    }

    genRandomQuestions() {
        var questionsCategories = questionData.filter(question => question.category == 1);
        var questions = []
        for (var i = 0; i < 5; i++){
            var index = Math.floor(Math.random()*questionsCategories.length)
            var question = new Question();             
            question.text = questionsCategories[index].text;
            var answersDa = this.shuffleArray(answerData.filter(answer => answer.question_id == questionsCategories[index].id))
            var answers = []
            for (var q = 0; q < 4; q++){
                var answer = {name: answersDa[q].name, correct: answersDa[q].correct}
                answers.push(answer)
            }
            question.answers = answers;
            questions.push(question)
        }
        return questions
    }

    shuffleArray(array:any[]) {
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

    startGame() {
        if (this.Questions.length == 0){
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
    }

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