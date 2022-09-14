import { Component, OnInit } from '@angular/core';
import { ListMenuUser } from './menu';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isCollapsed = false;
  ListMenuUser = ListMenuUser;

  path = '';
  title = 'angulartitle';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  goto(link: string): void {
    this.router.navigate([link]);
    this.path = this.router.url;
    let path = this.path.split('/')[1].toUpperCase( )
    this.titleService.setTitle(path);
  }

  setDocTitle(title: string) {
    console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
  }


}
