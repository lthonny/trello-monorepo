import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/page/footer/footer.component';
import { HeaderComponent } from './modules/page/header/header.component';
import { BoardsComponent } from './modules/page/boards/boards.component';
import { LoginComponent } from './modules/page/login/login.component';
import { RegComponent } from './modules/page/reg/reg.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './modules/register/register.component';
import { ErrorComponent } from './modules/error/error.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BoardsComponent,
    LoginComponent,
    RegComponent,
    RegisterComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
