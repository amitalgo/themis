import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, Slides } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { DonationProvider } from '../../providers/donation/donation';
import { UpdateProvider } from '../../providers/update/update';
import { UserProvider } from '../../providers/user/user';
import { SocialSharing } from '../../../node_modules/@ionic-native/social-sharing';
import { ProductsmenuPage } from '../productsmenu/productsmenu';
import { ReviewsPage } from '../reviews/reviews';
import { TrainingmanualPage } from '../trainingmanual/trainingmanual';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  role :any;

  constructor(public navCtrl: NavController, private menu:MenuController) {
    this.menu.enable(true)
    this.role=localStorage.getItem('role')
    console.log(this.role);
  }

  showdata(){

  }

  doReview(){
    this.navCtrl.setRoot(ReviewsPage)
  }

  training(){
    this.navCtrl.setRoot(TrainingmanualPage)
  }

  convertToInt(val){
    return parseInt(val)
  }

  
}
