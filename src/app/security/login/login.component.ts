import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'
import { MatDialog } from '@angular/material/dialog'
import { DialogForgotPasswordComponent } from '../dialog-forgot-password/dialog-forgot-password.component'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup
  hide: boolean = true
  background: boolean = false
  AppTitle: string = 'LOGIN'

  constructor(
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

    this._authService.currentState.subscribe(
      data => (this.background = data == 'loading')
    )
  }

  emailLogin() {
    if (this.formLogin.valid) {
      this.background = true
      this._authService.login(
        this.formLogin.controls.email.value,
        this.formLogin.controls.password.value
      )
    }
  }

  openDialogPassword() {
    let dialogRef = this._dialog.open(DialogForgotPasswordComponent, {})

    dialogRef.afterClosed().subscribe(result => {
      //if (!!result) this.authService.resetPassword(result)
    })
  }
}
