import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { catchError,  retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
 import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor(private matSnackBar: MatSnackBar) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var customReq = request.clone({});
        return next.handle(customReq)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let message = "Invalid API Key";
                    if (error.status == 401) {
                        this.matSnackBar.open(message, "X", { "duration": 3000 });
                    }
                    return throwError(message);
                }),
                );
    }
}
