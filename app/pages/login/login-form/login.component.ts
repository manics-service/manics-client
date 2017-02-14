import {Component, Optional} from '@angular/core'
import {MdDialogRef} from "@angular/material";

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    constructor(@Optional() public dialogRef: MdDialogRef<LoginComponent>) { }
}