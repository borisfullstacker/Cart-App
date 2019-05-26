import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/modules/auth.service';
import { Subscription } from 'rxjs';
import { DataComunicationService } from '../services/data-comunication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
isNavShown: any = false;
dataChangesSubscription: Subscription;

  constructor( private router:Router , private auth:AuthService, private data:DataComunicationService) { }
 
  ngOnInit() {
    
    this.dataChangesSubscription= this.data.currentMessage.subscribe(data=>{
          if (data!==""){
            this.isNavShown=data;

          }
    });

    this.checkForSession()
  }

  goToCart(){
   this.router.navigate(['/cart'])
  }

  goToHome(){
    this.router.navigate(['/home'])

  }
  goToOrders(){
    this.router.navigate(['/orders'])

  }

  logOut(){
    this.auth.signOut();
    this.isNavShown=false;
    this.router.navigate(['/login'])
  }

  checkForSession(){
    this.auth.checkForSession().then((res)=>{
      this.isNavShown=res;
  })
  

  }



}
