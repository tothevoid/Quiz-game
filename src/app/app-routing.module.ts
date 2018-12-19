import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ResultComponent } from './components/result/result.component'
import { MenuComponent } from './components/main-menu/main-menu.component'
import { LeaderboardsComponent } from './components/leaderboards/leaderboards.component';

const routes: Routes = [
  // production
  // { path: '', redirectTo: 'start', pathMatch: 'full'},

  { path: '', redirectTo: 'main-menu', pathMatch: 'full'},
  { path: 'start',  component: (() => {
    return localStorage.getItem('id')!=null ? MenuComponent : StartComponent;
  })()},
  { path: 'main-menu', component: MenuComponent, data:{animation:'MenuPage'} },
  { path: 'categories', component: CategoriesComponent, data:{animation:'CategoriesPage'} },
  { path: 'questions/:category', component: QuestionsComponent, data:{animation:'QuestionsPage'} },
  { path: 'result', component: ResultComponent, data:{animation:'ResultPage'} },
  { path: 'leaderboards', component: LeaderboardsComponent, data:{animation:'LeaderboardsPage'} },
  { path: '**', redirectTo: 'start' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
