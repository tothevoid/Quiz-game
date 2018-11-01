import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { StartComponent } from './components/start/start.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ResultComponent } from './components/result/result.component'
import { MenuComponent } from './components/main-menu/main-menu.component'
import { LeaderboardsComponent } from './components/leaderboards/leaderboards.component';
import { GamesComponent } from './components/online-games/online-games.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  { path: 'start',  component: (() => {
    return localStorage.getItem('id')!=null ? MenuComponent : StartComponent;
  })()},
  { path: 'main-menu', component: MenuComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'questions/:category', component: QuestionsComponent },
  { path: 'result', component: ResultComponent },
  { path: 'leaderboards', component: LeaderboardsComponent },
  { path: 'online-games', component: GamesComponent },
  { path: '**', redirectTo: 'start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
