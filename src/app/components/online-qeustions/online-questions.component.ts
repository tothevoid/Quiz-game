import { Component, Inject } from '@angular/core';

@Component({
    selector: 'online-questions',
    templateUrl: './online-questions.component.html',
    styleUrls: ['./online-questions.component.scss'],
})

export class OnlineQuestionsComponent{
   public QuestionsUser: String[] = ['','','','','']
   public QuestionsOpponent: String[] = ['','','','','']
}