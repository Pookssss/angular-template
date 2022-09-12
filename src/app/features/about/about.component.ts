import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dynamicContent =
    'Ant Design, a design language for background applications, is refined by Ant UED Team. ' +
    'Ant Design, a design language for background applications, is refined by Ant UED Team. ' +
    'Ant Design, a design language for background applications, is refined by Ant UED Team. ' +
    'Ant Design, a design language for background applications, is refined by Ant UED Team.';

  onChange(event: string): void {
    this.dynamicContent = event;
  }

}
