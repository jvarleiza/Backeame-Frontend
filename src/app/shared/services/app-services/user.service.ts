import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Http } from '@angular/http';
import { User } from '../../../models/user';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ng2-cookies';
import { USER_CREATE } from '../service-constants';

@Injectable()
export class UserService extends BaseService {

    constructor(protected _http: Http, protected _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    public createUser(user: User): Observable<User> {
        return new Observable<User>(subscriber => {
            this.doPost<User>(USER_CREATE, user)
                .subscribe(
                    (response) => {
                        subscriber.next(response);
                    },
                    error => {
                        console.log(error);
                    }
                );
        });
    };
}
