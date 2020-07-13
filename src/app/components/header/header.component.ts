import { Component, OnInit } from "@angular/core";
import { trigger, state, transition, animate, style, } from '@angular/animations';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],


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
  burgerStatusBtn: boolean = false;
  burgerStatus:string='small';
  whoWeAreStatus:string='small';

  constructor() {}

  ngOnInit(): void {}

  burgerMenu(): void {
    this.burgerStatusBtn == false
      ? (this.burgerStatusBtn = true)
      : (this.burgerStatusBtn = false);

      (this.burgerStatus=='small'?this.burgerStatus='large':this.burgerStatus='small')
      console.log(this.burgerStatus)
  }
 


  onResize(event) {
    if (event.currentTarget.innerWidth) {
      this.burgerStatusBtn = false;
      this.burgerStatus='small' 
    }
  }
}
