import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Injectable } from '@angular/core'

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem(environment.storage_auth_token) === null) {
      return next.handle(req)
    }

    const headers = req.headers.set('Content-Type', 'application/json')

    const authReq = req.clone({
      headers: headers.append(
        'Authorization',
        `Bearer ${localStorage.getItem(environment.storage_auth_token)}`
      )
    })

    return next.handle(authReq)
  }
}
