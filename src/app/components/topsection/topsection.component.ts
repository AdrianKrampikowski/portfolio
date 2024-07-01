import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-topsection',
  templateUrl: './topsection.component.html',
  styleUrls: ['./topsection.component.scss'],
})
export class TopsectionComponent {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

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
