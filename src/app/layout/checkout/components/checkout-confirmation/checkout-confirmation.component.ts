import { Component, OnInit } from '@angular/core';
import {ASSETS_URL} from "../../../../../environments/environment";

@Component({
  selector: 'app-checkout-confirmation',
  templateUrl: './checkout-confirmation.component.html',
  styleUrls: ['./checkout-confirmation.component.scss']
})
export class CheckoutConfirmationComponent implements OnInit {
  assetsUrl: string = ASSETS_URL;

  constructor() { }

  ngOnInit() {
  }

}
