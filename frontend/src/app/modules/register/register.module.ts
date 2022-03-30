import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRouting } from "./register.routing";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    providers: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RegisterRouting
    ]
})
export class RegisterModule { }