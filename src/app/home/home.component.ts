import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { DbService } from '../services/modules/db.service';
import { Router } from '@angular/router';
import { DataComunicationService } from '../services/data-comunication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  products: any=[
    {productId:1,description:"shoe"},
    {productId:2,description:"shirt"},
    {productId:3,description:"hat"},
    {productId:4,description:"pants"},
    {productId:5,description:"socks"},
    {productId:6,description:"belt"},
    {productId:7,description:"something1"},
    {productId:8,description:"something2"},
    {productId:9,description:"something3"},
    {productId:10,description:"something4"},
  ]
  
  constructor(private menu: MenuController, private model:DbService,private alertController:AlertController, private router:Router, private data:DataComunicationService) {


   }

  
  openCustom() {
    this.menu.enable(true, 'content');
    this.menu.open('content');
  }

  addToCart(e){

    let arr=[];
    e.amount=1;
    arr.push(e);
    this.presentAlertMultipleButtons();
    this.model.setData(arr)
  }

  goToCart(){
    this.router.navigate(['/cart'])
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Good job!',
      message: 'Item added to cart',
      buttons: [
        {
          text: 'ok',
          role: 'confirmation',
          cssClass: 'secondary',
        }
      ]
    });

    await alert.present();
 }




 ionViewWillEnter(){
  this.data.updateHeaderState(true);
}


  ngOnInit() {

  }
  

}
