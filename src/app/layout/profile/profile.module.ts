import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { SharedComponentsModule } from '../shared/shared-components.module';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../../app.module";
import {Http} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ProfileRoutingModule} from "./profile-routing.module";
import {ProfileComponent} from "./profile.component";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StatModule,
        NgbModule,
        SharedComponentsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        FormsModule,
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent
    ],

})
export class ProfileModule { }
