import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  {
    path: "boards",
    component: BoardsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "reg",
    component: RegComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
