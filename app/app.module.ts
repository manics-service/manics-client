import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from "./app.component";

import { HeaderComponent } from "./pages/login/navigation/header.component";
import { AppRoutingModule }  from './app.routing';
import { LoginComponent } from './pages/login/login-form/login.component'
import {MainComponent} from "./pages/login/main.component";
import {MaterialModule} from "@angular/material";
import {RegisterComponent} from "./pages/login/register-form/register.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        AppComponent,
        MainComponent,
        HeaderComponent
    ],
    entryComponents: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }