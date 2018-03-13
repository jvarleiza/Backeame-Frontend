import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CheckoutConfirmationComponent } from './components/checkout-confirmation/checkout-confirmation.component';

const routes: Routes = [
    { path: ':id', component: CheckoutComponent },
    { path: 'confirmation/:id', component: CheckoutConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
