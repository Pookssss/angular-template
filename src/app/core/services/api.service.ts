import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ApiResult } from '../../shared/models/http.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private httpClient: HttpClient,
    ) { }

    private isProduction = (): boolean => environment.production;

    private url = (uri: string): string => {
        return `/api${uri}`;
    }

    private static errHandler(err: HttpErrorResponse): Observable<never> {
        return throwError(err || 'server error');
    }

    private request = (
        method: string,
        uri: string,
        body: any = null,
        params: HttpParams,
        headers: HttpHeaders,
    ): Observable<ApiResult> => {
        return this.httpClient.request<ApiResult>(method, this.url(uri), { body, params, headers }).pipe(
            tap(
                (r) => { if (!this.isProduction()) { console.log('Success:', r); } },
                (err) => { if (!this.isProduction()) { console.log('Error:', err); } }
            ),
            catchError(ApiService.errHandler),
        );
    }

    get = (
        uri: string,
        params: HttpParams = new HttpParams(),
        headers: HttpHeaders = new HttpHeaders(),
    ): Observable<ApiResult> => {
        return this.request('get', uri, null, params, headers);
    }

    post = (
        uri: string,
        body: any,
        params: HttpParams = new HttpParams(),
        headers: HttpHeaders = new HttpHeaders(),
    ): Observable<ApiResult> => {
        return this.request('post', uri, body, params, headers);
    }

    put = (
        uri: string,
        body: any,
        params: HttpParams = new HttpParams(),
        headers: HttpHeaders = new HttpHeaders(),
    ): Observable<ApiResult> => {
        return this.request('put', uri, body, params, headers);
    }

    delete = (
        uri: string,
        body: any,
        params: HttpParams = new HttpParams(),
        headers: HttpHeaders = new HttpHeaders(),
    ): Observable<ApiResult> => {
        return this.request('delete', uri, body, params, headers);
    }

    find = (
        uri: string,
        pageIndex = 1,
        pageSize = 20,
        search = '',
        filter = '',
        params: HttpParams = new HttpParams(),
        headers: HttpHeaders = new HttpHeaders(),
    ): Observable<ApiResult> => {
        if (params === null || params === undefined) {
            params = new HttpParams();
        }
        params = params.append('page', `${pageIndex}`)
            .append('size', `${pageSize}`)
            .append('search', `${search}`)
            .append('filter', `${filter}`);
        return this.get(uri, params, headers);
    }
}
