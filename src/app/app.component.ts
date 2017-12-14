import { Component } from '@angular/core';
import 'hammerjs';
import { AuthService } from './services/auth.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  
  title = 'Cinema App';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.syncLoginStatus();
  }
}
