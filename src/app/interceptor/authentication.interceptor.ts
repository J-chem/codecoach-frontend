import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {KeycloakService} from "../service/keycloak.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.keycloakService.isLoggedIn()){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.keycloakService.getToken()}`
        }
      })
    }
    return next.handle(req).pipe(

    );
  }
}
