import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details.component';
import {RewardsComponent} from "./components/rewards/rewards.component";

const routes: Routes = [
    { path: ':urlComponent', component: ProjectDetailsComponent },
    { path: 'rewards/:urlComponent', component: RewardsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailsRoutingModule { }
