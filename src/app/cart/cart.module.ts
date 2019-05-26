import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartComponent
      }
    ])
  ],
  declarations: [CartComponent]
})

export class CartModule { }
