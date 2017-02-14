import {Component, Optional} from '@angular/core'
import {MdDialogRef} from "@angular/material";

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent  {
    constructor(@Optional() public dialogRef: MdDialogRef<RegisterComponent>) { }
}