import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/_services/auth.service';
import { NzModalService } from 'ng-zorro-antd/modal';
// import { ReCaptchaV3Service } from 'ng-recaptcha';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

interface AuthorizedAccess {
  client_key: string;
  merchant_id: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  // authorizedAccess: AuthorizedAccess = {} as AuthorizedAccess;
  // reCaptChaToken: string = '';

  validateForm!: FormGroup;
  verifying = false;

  YearNow: number = new Date().getFullYear();
  token: string | any;

  constructor(
    // private activatedRoute: ActivatedRoute,
    // private auth: AuthService,
    // private modalService: NzModalService,
    private router: Router,
    private fb: FormBuilder,
    private msg: NzMessageService,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    if(this.token = !null) {
      this.router.navigateByUrl('/home');
    }
    // this.authorizedAccess = {} as AuthorizedAccess;
    // this.verifying = true;
    // this.activatedRoute.queryParamMap.subscribe((p) => {
    //     this.authorizedAccess.client_key = p.get('client_key') || '';
    //     this.authorizedAccess.merchant_id = p.get('merchant_id') || '';
    //     if (this.authorizedAccess.client_key && this.authorizedAccess.client_key !== '' && this.authorizedAccess.merchant_id && this.authorizedAccess.merchant_id !== '') {
    //         this.auth
    //             .verifyByClientKey(
    //                 this.authorizedAccess.client_key,
    //                 this.authorizedAccess.merchant_id
    //             )
    //             .then(() => {
    //                 this.router.navigateByUrl('/');
    //             })
    //             .catch((err) => {
    //                 this.verifying = false;
    //                 if (err.status === 401) {
    //                     this.modalService.error({
    //                         nzTitle: 'ผิดพลาด',
    //                         nzContent: `บัญชีของคุณไม่ได้รับอนุญาตให้เข้าใช้งานระบบ`,
    //                     });
    //                 } else {
    //                     this.modalService.error({
    //                         nzTitle: 'ผิดพลาด',
    //                         nzContent: `ระบบมีปัญหา ${JSON.stringify(err)}`,
    //                     });
    //                 }
    //             });
    //     } else {
    //         this.verifying = false;
    //     }
    // });
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }


  login = (): void => {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      if (this.validateForm.controls['userName'].value === 'admin' && this.validateForm.controls['password'].value === 'p@ssw0rd') {
        localStorage.setItem('token', 'ABCDEFG')
        this.router.navigateByUrl('/home');
        console.log("Test Auth");
      } else {
        localStorage.clear();
        this.msg.error('เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
      }
    } else {
      this.msg.warning('กรุณากรอกข้อมูลให้ครบ')
    }
  }

}
