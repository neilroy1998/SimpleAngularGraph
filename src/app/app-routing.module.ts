import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DispGraphComponent } from './disp-graph/disp-graph.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dash', component: DashComponent},
  {path: 'disp-graph', component: DispGraphComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
