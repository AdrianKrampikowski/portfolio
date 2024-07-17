import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent {
  images: string[] = [
    'https://images.pexels.com/photos/758733/pexels-photo-758733.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/21261/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/567973/pexels-photo-567973.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/54630/japanese-cherry-trees-flowers-spring-japanese-flowering-cherry-54630.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/131046/pexels-photo-131046.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/302515/pexels-photo-302515.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/301682/pexels-photo-301682.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
  ];

  isDialogOpen: boolean = false;
  currentImage: string | null = null;

  openDialog(image: string): void {
    this.currentImage = image;
    this.isDialogOpen = true;
  }

  closeDialog(): void {
    this.isDialogOpen = false;
    this.currentImage = null;
  }

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
