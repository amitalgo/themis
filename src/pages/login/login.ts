import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HomePage } from '../home/home';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { RegisterPage } from '../register/register';
import { UserProvider } from '../../providers/user/user';
import { SharedProvider } from '../../providers/shared/shared';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loginResponse: any;
  userResponse:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private userProvider: UserProvider,private sharedProvider: SharedProvider,private event: Events,private menu: MenuController) {
      this.menu.enable(false)
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      }) 
      console.log(localStorage.getItem('role'));
  }

  doLogin(){
    localStorage.setItem('role',this.loginForm.value.email)
    this.event.publish('user:created',[]);
    this.navCtrl.setRoot(HomePage);
  }

  openRegistrationForm(){
    this.navCtrl.push(RegisterPage)
  }

  openForgotPasswordForm(){
    this.navCtrl.push(ForgotpasswordPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
