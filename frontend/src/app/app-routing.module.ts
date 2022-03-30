import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { BoardsComponent } from './modules/page/boards/boards.component';

const routes: Routes = [
  {
    path: "register",
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "login",
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  // {
  //   path: "changepass",
  //   loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  // },
  {
    path: "error",
    loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: "404",
    loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  // {
  //   path: "boards",
  //   component: BoardsComponent
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    relativeLinkResolution: 'corrected',
    preloadingStrategy: PreloadAllModules
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
