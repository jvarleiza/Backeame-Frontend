import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from "./checkout.component";
import { SharedComponentsModule } from "../shared/shared-components.module";
import {FormsModule} from "@angular/forms";
import { CheckoutConfirmationComponent } from './components/checkout-confirmation/checkout-confirmation.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        CheckoutRoutingModule,
        NgbModule,
        SharedComponentsModule,
        FormsModule
    ],
    declarations: [
        CheckoutComponent,
        CheckoutConfirmationComponent
    ]
})
export class CheckoutModule { }
