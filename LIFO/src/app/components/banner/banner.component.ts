import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  slideOptions = {
    speed: 300,
    autoplay: true,
    loop: true,
  }

  @Input() bannerImages: any[];
  
  constructor() { }

  ngOnInit() {}

}
