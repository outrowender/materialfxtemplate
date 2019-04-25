import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/security/auth.service'

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit() {}

  logoff() {
    this._authService.logout()
  }
}
