import {Component} from "@angular/core";
import {LoginComponent} from "../login-form/login.component";
import {MdDialog} from "@angular/material";
import {RegisterComponent} from "../register-form/register.component";

@Component({
    moduleId: module.id,
    templateUrl: 'header.components.html',
    styleUrls: ['header.component.css'],
    selector: 'header'
})

export class HeaderComponent {

    private static DIALOG_HEIGHT: string = "600px";
    private static DIALOG_WIDTH: string = "450px";

    constructor(public dialog: MdDialog) {}

    openRegisterDialog() {
       this.openDialog(RegisterComponent);
    }

    openLoginDialog(){
        this.openDialog(LoginComponent);
    }

    openDialog(dialog){
        this.dialog.open(dialog, {
            height: HeaderComponent.DIALOG_HEIGHT,
            width: HeaderComponent.DIALOG_WIDTH,
        });
    }
}