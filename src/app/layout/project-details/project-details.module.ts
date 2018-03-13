import { NgModule } from '@angular/core';
import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './project-details.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ProjectRewardComponent } from './components/project-reward/project-reward.component';
import {TimelineComponent} from "./components/timeline/timeline.component";
import {ChatComponent} from "./components/chat/chat.component";
import { ProjectFaqsComponent } from './components/project-faqs/project-faqs.component';
import {Accordion, AccordionGroup} from "./components/project-faqs/accordion";
import { RewardsComponent } from './components/rewards/rewards.component';

@NgModule({
    imports: [
        ProjectDetailsRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        ProjectDetailsComponent,
        ProjectRewardComponent,
        TimelineComponent,
        ChatComponent,
        ProjectFaqsComponent,
        Accordion,
        AccordionGroup,
        RewardsComponent
    ]
})
export class ProjectDetailsModule { }
