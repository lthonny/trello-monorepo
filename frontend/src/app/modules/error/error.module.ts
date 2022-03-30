import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { ErrorRouting } from './error.routing';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        ErrorComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ErrorRouting
    ]
})
export class ErrorModule { }