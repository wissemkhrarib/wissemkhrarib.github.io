import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/animations/lottie-header-animation.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
