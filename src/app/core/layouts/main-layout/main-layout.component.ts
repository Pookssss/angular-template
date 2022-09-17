import { Component, OnInit } from '@angular/core';
import { ListMenuUser } from './menu';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MenuUser } from '../_models/menu.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isCollapsed = false;
  ListMenuUser = ListMenuUser;
  ListBreadcrumb: string[] | [] = [];

  path = '';
  mainPath: string = '';
  subPath: string = '';
  title = 'angulartitle';

  // ขนาดหน้าจอ
  public innerWidth: any;
  // ขนาด sidebar
  nzCollapsedWidth: number | any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,

  ) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.responsive();
    this.showBreadcrumb();
  }

  ngOnchange(): void {
    this.responsive();
  }

  responsive(): void {
    console.log('innerWidth: ' + this.innerWidth);
    if (this.innerWidth < 1200) {
      this.nzCollapsedWidth = 0;
    } else {
      this.nzCollapsedWidth = 64;
    }
  }

  // แสดง breadcrumb
  showBreadcrumb(): void {
    this.path = this.router.url;
    this.mainPath = `${this.path.split('/')[1]}`;
    this.ListBreadcrumb = [this.mainPath.toUpperCase()];
  }


  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  goto(link: string): void {
    this.router.navigate([link]);
    this.path = this.router.url;
    let path = this.path.split('/')[1].toUpperCase()
    this.titleService.setTitle(path);
  }

  setDocTitle(title: string) {
    console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
  }


}
