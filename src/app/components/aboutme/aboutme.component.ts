import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})

export class AboutmeComponent {
  // @ViewChild('visibleContainer') visibleContainer!: ElementRef;

  // constructor() { }

  // ngAfterViewInit() {
  //   this.observeContainer();
  // }

  // observeContainer() {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.1
  //   };

  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         this.showComponent();
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, options);

  //   observer.observe(this.visibleContainer.nativeElement);
  // }

  // showComponent() {
  //   this.visibleContainer.nativeElement.classList.add('visible');
  // }
}
