import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server: string = environment.api
  jsonHeader = { 'Content-Type': 'application/json; charset=utf-8' }

  private bgContent = new BehaviorSubject<string>(null)
  currentState = this.bgContent.asObservable()

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }

  login(email: string, password: string) {
    this._http
      .post<any>(
        `${this.server}/auth/login`,
        JSON.stringify({ email, password }),
        { headers: this.jsonHeader }
      )
      .pipe(
        tap(item => {
          localStorage.setItem(
            environment.storage_auth_token,
            item.access_token
          )
          this._router.navigate(['/home'])
        })
      )
      .subscribe(
        data => {
          this.bgContent.next(null)
        },
        request => {
          this._snackBar.open(request.message, 'OK', {
            duration: 5000
          })
          this.bgContent.next(null)
        }
      )
  }

  logout() {
    localStorage.removeItem(environment.storage_auth_token)
    this._router.navigate(['login'])

    this._snackBar.open('Logged out', 'OK', {
      duration: 5000
    })
  }

  getUserData(): any {
    var token = localStorage.getItem(environment.storage_auth_token)

    let jwtData = token.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)

    return decodedJwtData
  }
}
