import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  
  @Input() value: any;
  cartData: any=[];
  constructor(private  modalCtrl:ModalController) {
   }

  ngOnInit() {
    this.cartData=this.value;

  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }
}
