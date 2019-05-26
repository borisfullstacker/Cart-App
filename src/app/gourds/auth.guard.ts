import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
   
  constructor(private storage:Storage,private router:Router){}
  
  async canActivate(){
    
    let res= await this.storage.get('session');
    if (res){
      return res;
    }else{
      this.router.navigate(["login"])
      return res;
    }
  }
  
}
