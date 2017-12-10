import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerformanceComponent } from '../../components/performance/performance.component';
import { FilmsComponent } from '../../components/films/films.component';
import { AddformComponent } from '../../components/addform/addform.component';
import { LoginComponent } from '../../components/login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/films', pathMatch:'full'},
  { path: 'films', component: FilmsComponent },
  { path: 'performance/:id', component: PerformanceComponent },
  { path: 'add', component: AddformComponent},
  { path: 'login', component: LoginComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
