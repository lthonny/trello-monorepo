import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRouting } from './not-found.routing';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        NotFoundRouting
    ]
})
export class NotFoundModule {  }