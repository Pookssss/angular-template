import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 
import { SharedModule } from '../../shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';
import { IncomeComponent } from './income/income.component';
import { AccountComponent } from './account.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    IncomeComponent,
    AccountComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
  ]
})
export class AccountModule { }
