import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

userDetails: object= {
    name:"boris",
    password:123,
    address:"some street",
    customerId:1,
 }
 
 
  constructor(private storage:Storage) { }

validateUser(name,password){

     if(name===this.userDetails['name'] && password==this.userDetails['password']){
      this.storage.set('session',true);
        return true;
      }
      return false;
}


signOut(){
   this.storage.remove("session")
}

async checkForSession(){

   let result= await this.storage.get('session');
   if (result===null)  return false
  
  return true;
   
   
  }


  getUserDetails(){
    return this.userDetails;
  }



}













