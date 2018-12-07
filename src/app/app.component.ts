import { Component, ViewChild, enableProdMode } from '@angular/core';
import { Nav, Platform, NavController, Events,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ContactPage } from '../pages/contact/contact';
import { AppealPage } from '../pages/appeal/appeal';
import { NgoPage } from '../pages/ngo/ngo';
import { DonationPage } from '../pages/donation/donation';
import { OfflinedonationPage } from '../pages/offlinedonation/offlinedonation';
import { ProfilePage } from '../pages/profile/profile';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { SharedProvider } from '../providers/shared/shared';
import { UpdatesPage } from '../pages/updates/updates';
import { TeamPage } from '../pages/team/team';
import { UserProvider } from '../providers/user/user';
import { ProductsmenuPage } from '../pages/productsmenu/productsmenu';
import { ReviewsPage } from '../pages/reviews/reviews';
import { TrainingmanualPage } from '../pages/trainingmanual/trainingmanual';
import { VideosPage } from '../pages/videos/videos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  user: any = {
    'image': '../assets/imgs/profile-pic.png',
    'fullName': 'Aditya',
    'email': 'aditya@technople.in'
  };
  token: any;
  isLoggedIn: any;
  userRole:any;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private event: Events, public sharedProvider: SharedProvider,private userProvider: UserProvider,private menuCtrl:MenuController) {
    // if (platform.is('ios')
    //   || platform.is('android')
    //   || platform.is('windows')) {
    //   enableProdMode();
    // }
    this.user = sharedProvider.getUserInfo()
    this.initializeApp();
    this.userRole=localStorage.getItem('role');
    // this.callPages(this.userRole)
    event.subscribe('user:updated',()=>{
      // this.user = localStorage.getItem('role');
      console.log('comp'+localStorage.getItem('role'))
      // this.callPages(this.userRole);
    })
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: HomePage },
      { title: 'Product Menu', component: ProductsmenuPage},
      { title: 'Reviews', component: ReviewsPage},
      { title: 'Training Manuals', component: TrainingmanualPage},
      { title: 'Videos', component: VideosPage},
      { title: 'My Account', component: ProfilePage},
      { title: 'ChangePassword', component: ChangepasswordPage }
    ];
  }

  // callPages(userRole){
  //   if(userRole=="sales"){
  //     this.pages = [
  //         { title: 'Dashboard', component: HomePage },
  //         { title: 'Product Menu', component: ProductsmenuPage},
  //         { title: 'Reviews', component: ReviewsPage},
  //         { title: 'Training Manuals', component: TrainingmanualPage},
  //         { title: 'Videos', component: VideosPage},
  //         { title: 'My Account', component: ProfilePage},
  //         { title: 'ChangePassword', component: ChangepasswordPage }
  //       ];
  //   }else if(userRole=="salesHead"){
  //     this.pages = [
  //       { title: 'Dashboard', component: HomePage },
  //       { title: 'Product Menu', component: ProductsmenuPage},
  //       { title: 'Reviews', component: ReviewsPage},
  //       { title: 'Training Manuals', component: TrainingmanualPage},
  //       { title: 'Videos', component: VideosPage},
  //       { title: 'My Account', component: ProfilePage},
  //       { title: 'ChangePassword', component: ChangepasswordPage }
  //     ];
  //   }else if(userRole=="doctors"){
  //     this.pages = [
  //       { title: 'Dashboard', component: HomePage },
  //       { title: 'Product Menu', component: ProductsmenuPage},
  //       { title: 'My Account', component: ProfilePage},
  //       { title: 'ChangePassword', component: ChangepasswordPage }
  //     ];
  //   }
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log(localStorage.getItem('role'));
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  doLogout(){
    this.sharedProvider.clearLocalStorage()
    this.nav.setRoot(LoginPage);
  }
}
