import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { SharedModule } from '../shared/shared.module';


// Ng Zorro
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ErrorLayoutComponent } from './layouts/error-layout/error-layout.component';

registerLocaleData(en);

/** Http interceptor providers in outside-in order */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenInterceptor } from './interceptors/auth.interceptor';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenInterceptor,
    multi: true
  },
];

@NgModule({
  declarations: [
    ErrorLayoutComponent,
    MainLayoutComponent,
  ],
  imports: [
    // vendor
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,

    // Ng Zorro
    NzLayoutModule,
    NzGridModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzAvatarModule,
    NzMessageModule,
    NzFormModule,
    NzResultModule,
    NzMenuModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    Title,
    httpInterceptorProviders,
  ],
  exports: [
    ErrorLayoutComponent,
  ],
})
export class CoreModule { }
