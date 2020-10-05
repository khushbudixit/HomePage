import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentformComponent } from './agentform/agentform.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';


const routes: Routes = [
{path:'home1',component: Home1Component},
{path:'agentform', component: AgentformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
