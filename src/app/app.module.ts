import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http} from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { CookieService } from "ng2-cookies";

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {ASSETS_URL} from "../environments/environment";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, ASSETS_URL + '/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        NgbModule.forRoot()
    ],
    providers: [AuthGuard, CookieService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }

// https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode
// https://stackoverflow.com/questions/12614072/how-do-i-configure-iis-for-url-rewriting-an-angularjs-application-in-html5-mode
// https://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-browser
