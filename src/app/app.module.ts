import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialFlexModule } from './material-flex/material-flex.module'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './security/login/login.component'
import { SharedModule } from './shared/shared.module'
import { DialogForgotPasswordComponent } from './security/dialog-forgot-password/dialog-forgot-password.component'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: './home/home.module#HomeModule' }
]

@NgModule({
  declarations: [AppComponent, LoginComponent, DialogForgotPasswordComponent],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,

    MaterialFlexModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogForgotPasswordComponent]
})
export class AppModule {}
