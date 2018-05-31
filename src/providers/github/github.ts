import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';




@Injectable()
export class GithubProvider {

  private baseUrl: string = "https://api.github.com/users";
  private reposUrl: string = "repos";

  constructor(private http: HttpClient) {
    console.log('Hello GithubProvider Provider');
  }

  getUserInfomation(username: string): Observable<User> {
    return this.http.get(this.baseUrl + "/" + username)
      .do((data: Response) => console.log(data))
      .map((data: Response) => data)
      .catch((error: Response) => Observable.throw(error || "Server error"))
  }



  getReporitoryInfomation(username: string): Observable<Repository[]> {
    return this.http.get(this.baseUrl + "/" + username + "/" + this.reposUrl)
      .do(this.logData)
      .map(this.extractData)
      .catch(this.handleError)
  }

  /*
    finding username from USER_LIST, equal to username
    returning results as Observable
  */
  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  mockGetReporitoryInfomation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

  private handleError(error: Response | any) {
    return Observable.throw(error || "server error");
  }

  private extractData(response: Response) {
    return response;
  }

  private logData(response: Response) {
    console.log(response);

  }

}
