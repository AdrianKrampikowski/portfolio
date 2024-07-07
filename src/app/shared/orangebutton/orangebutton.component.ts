import { Component, Input, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core'; 

@Component({
  selector: 'app-orangebutton',
  templateUrl: './orangebutton.component.html',
  styleUrls: ['./orangebutton.component.scss'],
})
export class OrangebuttonComponent implements OnInit {
  @Input() text: string = '';
  @Input() isDisabled: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  scrollDownContact(): void {
    const element = this.renderer.selectRootElement('#contact', true);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
