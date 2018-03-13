import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { SharedComponentsModule } from '../shared/shared-components.module';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../../app.module";
import {Http} from "@angular/http";
import {SettingsComponent} from "./settings.component";
import {SettingsRoutingModule} from "./settings-routing.module";
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditNotificationsComponent } from './components/edit-notifications/edit-notifications.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        SettingsRoutingModule,
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
        FormsModule
    ],
    declarations: [
        SettingsComponent,
        EditProfileComponent,
        EditNotificationsComponent,
        EditAccountComponent
    ],

})
export class SettingsModule { }
