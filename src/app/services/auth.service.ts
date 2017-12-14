import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { url } from '../config/api';
import { User } from '../classes/user';

@Injectable()
export class AuthService {
  private static user: User = null;

  constructor(
    private http: HttpClient
  ) { }

  public login(userName: string, password: string): Observable<boolean> {
    const result = new Subject<boolean>();
    this.http.post(url + 'auth/login', {userName, password}).subscribe((user) => {
      AuthService.user = user as User;
      result.next(true);
    }, (error) => {
      AuthService.user = null as User;
      result.next(false);
    });
    return result;
  }

  public logout(): void {
    this.http.get(url + 'auth/logout').subscribe(() => {
      AuthService.user = null;
    });
  }

  public isLoggedIn(): boolean {
    return AuthService.user !== null;
  }

  public syncLoginStatus(): void {
    this.http.get(url + 'auth/user').subscribe((user) => {
      if(user) {
        AuthService.user = user as User;
      } else {
        AuthService.user = null;
      }
    });
  }

  public userHasRole(role: string[]): boolean {
    if(!this.isLoggedIn()) {
      return false;
    }
    return role.includes(AuthService.user.role);
  }

  public getRole(): string {
    if(this.isLoggedIn()) {
      return AuthService.user.role;
    }
    return undefined;
  }

}
