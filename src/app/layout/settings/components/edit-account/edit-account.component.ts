import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/user";

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  accountModel: User;
  isCollapsed: boolean = true;

  constructor() {
    // TODO esto no tiene que ser new User() sino el que esta loggeado
    this.accountModel = new User();
  }

  ngOnInit() { }

  saveAccount(){

  }

}
