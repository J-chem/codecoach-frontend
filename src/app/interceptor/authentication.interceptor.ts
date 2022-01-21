import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {KeycloakService} from "../service/keycloak.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.keycloakService.isLoggedIn()) {
      this.router.navigateByUrl("/signin").then();
      return next.handle(req);
    }

    if (this.router.url === '/signin') {
      return next.handle(req);
    }

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.keycloakService.getToken()}`
      }
    })
    return next.handle(req).pipe(
      //   catchError(
      //     (err: any) => {
      //     if (err.status === 403 || err.status === 401) {
      //       this.router.navigateByUrl("/error").then();
      //     } else if(err.status === 0) {
      //       this.router.navigateByUrl("/backend-unavailable").then()
      //     }
      //     return new Error(err as unknown as string);
      //   })
    );
  }
}
