import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { MiniProjectComponent } from "./components/mini-project/mini-project.component";
import {StatModule} from "../../shared/modules/stat/stat.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        StatModule,
        NgbModule,
        TranslateModule,
        NgbDropdownModule,
        RouterModule
    ],
    declarations: [
        MiniProjectComponent
    ],
    exports: [
        MiniProjectComponent
    ]
})
export class SharedComponentsModule { }
