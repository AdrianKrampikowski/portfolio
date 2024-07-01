import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orangebutton',
  templateUrl: './orangebutton.component.html',
  styleUrls: ['./orangebutton.component.scss'],
})
export class OrangebuttonComponent implements OnInit {
  @Input() text = '';
  @Input() isDisabled? = false;

  ngOnInit(): void {}

  scrollDownContact() {
    let element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
