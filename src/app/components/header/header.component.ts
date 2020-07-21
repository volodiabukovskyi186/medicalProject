import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style
} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

  animations: [
    trigger('smallbar', [
      state('small', style({ width: '0vw', opacity: 0 })),
      state('large', style({ width: '100%', opacity: 1 })),
      transition('large=>small', animate('400ms ease-in')),
      transition('small=>large', animate('400ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  burgerStatusBtn = false;
  burgerStatus = 'small';
  whoWeAreStatus = 'small';
  translateStatus = false;



  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  burgerMenu(): void {
    this.burgerStatusBtn === false
      ? (this.burgerStatusBtn = true)
      : (this.burgerStatusBtn = false);

    this.burgerStatus === 'small'
      ? (this.burgerStatus = 'large')
      : (this.burgerStatus = 'small');
  }

  onResize(event) {
    if (event.currentTarget.innerWidth) {
      this.burgerStatusBtn = false;
      this.burgerStatus = 'small' ;
    }
  }
  translteStatus(): void {
    this.translateStatus === false ? this.translateStatus = true : this.translateStatus = false;

  }


}


