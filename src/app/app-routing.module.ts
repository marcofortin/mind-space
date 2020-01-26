import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodayComponent } from './today/today.component';


const routes: Routes = [
  {path: '', component: TodayComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'today', component: TodayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
