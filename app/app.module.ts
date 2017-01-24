import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from "./app.component";

import { NavigationComponent } from "./pages/login-page/navigation/navigation.component";
import { AppRoutingModule }  from './app.routing';
import { LoginComponent } from './pages/login-page/login/login.component'
import {TranslateModule} from "ng2-translate";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        TranslateModule.forRoot()
    ],
    declarations: [
        LoginComponent,
        AppComponent,
        NavigationComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }