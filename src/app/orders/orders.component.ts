import { Component, OnInit, ViewChild } from '@angular/core';
import { DbService } from '../services/modules/db.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/modules/auth.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import {BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
userOrders: any=[];
userDetails: any={};
temp: any =[];


encodeData: any;
barcodeScannerOptions: BarcodeScannerOptions;
searchVal : any="";



@ViewChild(ModalPage) ModalPage: ModalPage


  constructor(private db: DbService, private router:Router, private auth:AuthService, private modalController:ModalController, private barcodeScanner: BarcodeScanner) {
    this.encodeData = "https://www.FreakyJolly.com";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };


   }
   
  scan() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Search for " + barcodeData.text);
        // let objToSend={detail:{value: barcodeData.text}}
        // this.search(objToSend);
        this.searchVal=barcodeData.text;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }

  ngOnInit() {
  }


  search(e){
    let val= e.detail.value

    if (val===""){
       this.userOrders=this.temp.slice();
    }
    else if(isNaN(val)){
      this.userOrders= this.temp.filter((product)=>{
        for (let item of product.cart){
          if (item.description.toLowerCase().includes(val.toLowerCase())){
            return true;
          }
          
      }
      return false;
      });

    }else if(!isNaN(val)){
      this.userOrders= this.temp.filter((product)=>product.id==val);

    }
    


  }
  

  async presentModal(e) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { value: e.cart }
    });
    return await modal.present();
  }

  ionViewWillEnter(){
      
      this.userDetails=this.auth.getUserDetails();

      this.db.getData('orders').then((res)=>{
         this.userOrders= res.reverse();
         this.temp=res;
      })
  }





}
