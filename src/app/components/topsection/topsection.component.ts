import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-topsection',
  templateUrl: './topsection.component.html',
  styleUrls: ['./topsection.component.scss'],
})
export class TopsectionComponent {
  constructor(private elRef: ElementRef) {}

  scrollToAboutMe(): void {
    const aboutMeElement = document.querySelector('#aboutMe');
    if (aboutMeElement) {
      aboutMeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  
}
