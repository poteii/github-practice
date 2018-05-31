import { Repository } from './../../models/repository.interface';
import { GithubProvider } from './../../providers/github/github';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.interface';

@IonicPage()
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private githubProvider: GithubProvider) {
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    console.log(this.username);
    if (this.username) {
      this.getUserInfo();
    }

  }

  getUserInfo(): void {
    // this.githubProvider.mockGetUserInformation(this.username).subscribe(
    //   (data: User) => {
    //     console.log(data);
    //     this.user = data;

    //   }
    // );

    // this.githubProvider.mockGetReporitoryInfomation(this.username).subscribe(
    //   (data: Repository[]) => {
    //     this.repositories = data;
    //   }
    // );


    this.githubProvider.getUserInfomation(this.username).subscribe((data: User) => this.user = data);

    this.githubProvider.getReporitoryInfomation(this.username).subscribe((data: Repository[]) => this.repositories = data);

  }

}
