import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    providers: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        LoginRouting
    ]
})
export class LoginModule { }