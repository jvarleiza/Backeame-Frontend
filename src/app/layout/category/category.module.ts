import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from "./category.component";
import { SharedComponentsModule } from "../shared/shared-components.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        CategoryRoutingModule,
        NgbModule,
        SharedComponentsModule,
        FormsModule
    ],
    declarations: [
        CategoryComponent
    ]
})
export class CategoryModule { }
