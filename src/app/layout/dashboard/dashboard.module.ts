import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';
import { TinderComponent } from './components/tinder/tinder.component';
import { SharedComponentsModule } from '../shared/shared-components.module';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        NgbModule,
        SharedComponentsModule,
        TranslateModule
    ],
    declarations: [
        DashboardComponent,
        TinderComponent
    ],

})
export class DashboardModule { }
