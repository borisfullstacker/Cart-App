
import { Component, ViewChild, OnInit } from '@angular/core';
import { DbService } from '../services/modules/db.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/modules/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  @ViewChild(NgForm) form: NgForm;


formChangesSubscription: any;
isErrShown: boolean= false;
name: string="";
password: string="";
isUserAuth: boolean=false;

 constructor( private auth:AuthService, private alertController:AlertController, private router: Router){

 }

 ngOnInit(){
   
    this.formChangesSubscription = this.form.valueChanges.subscribe(() => {
         this.isErrShown=false;
    })

 }

 submit(){

  if (this.name.length===0 || this.password.length===0){
     this.isErrShown=true;
     return
  }else{

    this.isErrShown=false;
    this.isUserAuth=this.auth.validateUser(this.name , this.password);
    if (this.isUserAuth){
      this.router.navigate(['/home'])
    }else{
      this.presentAlertMultipleButtons()
    }
  
    this.name="";
    this.password="";

  }
  
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Login faild',
      message: 'Username or password are not correct',
      buttons: [
        {
          text: 'Try again',
          role: 'cancel',
          cssClass: 'secondary',

        }
      ]
    });

    await alert.present();
 }




  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
  }

 
}
