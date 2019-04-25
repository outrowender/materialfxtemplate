import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { HeaderInterceptor } from '../security/auth.interceptor'

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ]
})
export class SharedModule {}
