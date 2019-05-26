import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { ModalPage } from '../modal/modal.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrdersComponent
      }
    ])
  ],
  declarations: [OrdersComponent,ModalPage],
  entryComponents:[ModalPage],
  providers:[BarcodeScanner],
  
  })
export class OrdersModule { }
