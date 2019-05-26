import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gourds/auth.guard';
import {LoginAuthGuard} from './gourds/login-auth.guard'


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate:[LoginAuthGuard]  },
  { path: 'home', loadChildren: './home/home.module#HomeModule', canActivate:[AuthGuard] },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule', canActivate:[AuthGuard]},
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' , canActivate:[AuthGuard]},
  {path: '**', redirectTo: "login"},
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
