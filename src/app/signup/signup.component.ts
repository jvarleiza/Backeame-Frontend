import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { Router } from "@angular/router";
import { UserService } from '../shared/services/app-services/user.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers: [UserService]
})
export class SignupComponent implements OnInit {
    model: User;

    constructor(public router: Router, public userService: UserService) {
        this.model = new User();
    }

    ngOnInit() { }

    register() {
        this.userService.createUser(this.model)
            .subscribe(
                data => {
                    // TODO: follow guide --> http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
                    //this.alertService.success('Registration successful', true);
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    //this.alertService.error(error);
                    //this.loading = false;
                });
    }
}
