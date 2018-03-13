import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/user";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profile: User;
  constructor() {
    this.profile = new User();
  }

  ngOnInit() {
  }

  saveProfile(){

  }

}
