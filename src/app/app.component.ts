import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'myportfolio';
  showMenuItems: boolean = false;
  showImprintItems: boolean = false;

  showMenuItem(event: any) {
    this.showMenuItems = event;
  }

  showImprintItem(event: any) {
    this.showImprintItems = event;
  }

  disableImprintItem(event: any) {
    this.showImprintItems = event;
    setTimeout(() => {
      this.textFunction();
    }, 250);
  }

  imprintToggle(event: any) {
    this.showImprintItems = event;
    setTimeout(() => {
      this.textFunction();
    }, 250);
  }

  @ViewChild('visibleContainerAboutMe') visibleContainerAboutMe!: ElementRef;
  @ViewChild('visibleContainerSkill') visibleContainerSkill!: ElementRef;
  @ViewChild('visibleContainerPortfolio')
  visibleContainerPortfolio!: ElementRef;
  @ViewChild('visibleContainerContact') visibleContainerContact!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.textFunction();
  }

  textFunction() {
    this.observeContainer(this.visibleContainerAboutMe.nativeElement, () => {
      this.visibleContainerAboutMe.nativeElement.classList.add('visible');
      this.visibleContainerAboutMe.nativeElement.style.zIndex = '5';
    });

    this.observeContainer(this.visibleContainerSkill.nativeElement, () => {
      this.visibleContainerSkill.nativeElement.classList.add('visible');
    });

    this.observeContainer(this.visibleContainerPortfolio.nativeElement, () => {
      this.visibleContainerPortfolio.nativeElement.classList.add('visible');
    });

    this.observeContainer(this.visibleContainerContact.nativeElement, () => {
      this.visibleContainerContact.nativeElement.classList.add('visible');
    });
  }

  observeContainer(targetElement: HTMLElement, callback: () => void) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(); // Die übergebene Callback-Funktion aufrufen
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(targetElement);
  }
}
