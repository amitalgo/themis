import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DonardetailPage } from '../donardetail/donardetail';
import { SharedProvider } from '../../providers/shared/shared';
import { DonationProvider } from '../../providers/donation/donation';

/**
 * Generated class for the DonationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html',
})
export class DonationPage {

  token: any;
  donations: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController,
    private sharedProvider: SharedProvider, private donationProvider: DonationProvider) {
      this.getAllDonations()
  }

  getAllDonations(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationPage');
  }

  donarDetail(donationId){
    
    // modal.present()
  }
}
