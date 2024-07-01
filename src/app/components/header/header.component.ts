import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  showMenuItems: boolean = false;
  @Input() inputNewValue: boolean = false;
  @Output() displayMenuItem = new EventEmitter<any>();
  @Output() imprintToggle = new EventEmitter<any>();

  scrollToSelectedElement(element: any) {
    this.imprintToggle.emit(false);
    setTimeout(() => {
      const headerElement = document.querySelector(element);
      if (headerElement) {
        headerElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 125);

  }

  ngOnChanges(): any {
    this.showMenuItems = this.inputNewValue;
  }

  showMenu() {
    this.showMenuItems = !this.showMenuItems;
    this.displayMenuItem.emit(this.showMenuItems);
  }

  ngOnInit(): void {}
}
