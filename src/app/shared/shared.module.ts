import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Ng Zorro
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { BidiModule } from '@angular/cdk/bidi';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Ng Zorro
    NzLayoutModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzAvatarModule,
    NzMessageModule,
    NzFormModule,
    NzSpinModule,
    NzCardModule,
    NzResultModule,
    NzInputModule,
    NzCheckboxModule,
    NzModalModule,
    NzSelectModule,
    NzTableModule,
    NzDividerModule,
    NzRadioModule,
    NzCalendarModule,
    NzBadgeModule,
    NzDatePickerModule,
    NzUploadModule,
    NzDrawerModule,
    NzTabsModule,
    NzCarouselModule,
    NzImageModule,
    NzTagModule,
    BidiModule,
    NzToolTipModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzTypographyModule,


  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Ng Zorro
    NzLayoutModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzAvatarModule,
    NzMessageModule,
    NzFormModule,
    NzSpinModule,
    NzCardModule,
    NzResultModule,
    NzInputModule,
    NzCheckboxModule,
    NzModalModule,
    NzSelectModule,
    NzTableModule,
    NzDividerModule,
    NzRadioModule,
    NzCalendarModule,
    NzBadgeModule,
    NzDatePickerModule,
    NzUploadModule,
    NzDrawerModule,
    NzTabsModule,
    NzCarouselModule,
    NzImageModule,
    NzTagModule,
    BidiModule,
    NzToolTipModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzCarouselModule,
    NzTypographyModule,
    
  ],
  providers: [NzModalService]
})
export class SharedModule { }
