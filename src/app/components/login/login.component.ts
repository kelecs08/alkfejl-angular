import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  private errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.route.snapshot.queryParamMap.get('from')) {
      this.errorMessage = 'To load this page, you need to log in first.';
    }
  }

  private tryLogin(userName: string, password: string) {
    this.authService.login(userName, password).subscribe((success: boolean) => {
      if(success) {
        const redirecTo: string = this.route.snapshot.queryParamMap.get('from') || '';
        this.router.navigate([redirecTo]);
      } else {
        this.errorMessage = 'Wrong email or password provided.';
      }
    })
  }

  public tryLogin(email: string,
                  password: string) {
    console.log("Login " + email);
  }

}
