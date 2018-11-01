import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { StartComponent } from './components/start/start.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ResultComponent } from './components/result/result.component'
import { MenuComponent } from './components/main-menu/main-menu.component'
import { LeaderboardsComponent } from './components/leaderboards/leaderboards.component'
import { GamesComponent } from './components/online-games/online-games.component'
import { LobbyComponent } from './components/lobby/lobby.component';
import { OnlineQuestionsComponent } from './components/online-qeustions/online-questions.component';
import { OnlineResultComponent } from './components/online-result/online-result.component';

@NgModule({
  declarations:[
    AppComponent,
    StartComponent,
    CategoriesComponent,
    QuestionsComponent,
    ResultComponent,
    MenuComponent,
    LeaderboardsComponent,
    GamesComponent,
    LobbyComponent,
    OnlineQuestionsComponent,
    OnlineResultComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
