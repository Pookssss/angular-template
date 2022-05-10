/** Injectable */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Err500 } from 'src/app/shared/_models/http.model';
import { catchError } from 'rxjs/operators';
/** HTTP */
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';
/** RxJS */
import { Observable, throwError } from 'rxjs';

/** Interceptor URL Match list */
export const InterceptorMatchList = [
    // new RegExp(`(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?/api/*`),
    new RegExp(`.*`),
];

/** Export AuthenInterceptor to Hook Callback function before send request */
@Injectable()
export class AuthenInterceptor implements HttpInterceptor {
    /** Constructor */
    constructor(private router: Router) { }

    /** Matches function */
    private match = (url: string): boolean => {
        for (const pattern of InterceptorMatchList) {
            if (Array.isArray(url.match(pattern))) { return true; }
        }
        return false;
    }

    /** Intercept http request w/ set authorized header */
    intercept = (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {
        if (this.match(request.url)) {
            /** Attach token even if token is available */
            const token = localStorage.getItem('token');
            const tokenType = localStorage.getItem('type');
            if (token && tokenType) {
                if (token && tokenType) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: `${tokenType} ${token}`,
                        }
                    });
                }
            }
        }
        /** Return interceptor request */
        return next.handle(request).pipe(catchError((err) => {
            if (err instanceof HttpErrorResponse && err.status === 401) {
                localStorage.clear();
                this.router.navigateByUrl('/auth');
            }
            // else if (err instanceof HttpErrorResponse && err.status === 500) {
            //     this.router.navigateByUrl('/error', { state: Err500 });
            // }
            return throwError(err);
        }));
    }
}
