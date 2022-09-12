import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  array = [1, 2, 3, 4];

  ListCarousels = [
    {
      title: 'IU',
      url: "../../../assets/images/iu-1.jpg"
    },
    {
      title: 'BlackPink',
      url: "../../../assets/images/iu-2.jpg"
    },
    {
      title: 'Jisoo',
      url: "../../../assets/images/iu-3.jpg"
    },
    {
      title: 'Jisoo',
      url: "../../../assets/images/iu-5.jpg"
    },
    {
      title: 'Jisoo',
      url: "../../../assets/images/iu-6.jpg"
    },
    {
      title: 'Jisoo',
      url: "../../../assets/images/iu-7.jpg"
    },
    {
      title: 'Jisoo',
      url: "../../../assets/images/iu-8.jpg"
    },

  ]

  ListCard = [1, 2, 3, 4, 5, 6]

  constructor() { }

  ngOnInit(): void {
  }

}
