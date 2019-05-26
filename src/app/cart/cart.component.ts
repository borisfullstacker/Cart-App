import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../services/modules/db.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  cartData: any=[];

  constructor(private router:Router , private db:DbService) { }

  ngOnInit() {}


  ionViewWillEnter(){
     this.db.getData('cart').then((res)=>{
      this.cartData=res
       })
  }

  purchase(){
     this.db.closeCart(this.cartData).then((res)=>{
         if (res==="success") this.router.navigate(['/orders'])
     });
  }

}
