import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.scss'],
})
export class MenuitemsComponent implements OnInit {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  showMenuItems: boolean = false;

  @Output() displayMenuItem = new EventEmitter<any>();
  @Output() imprintToggle = new EventEmitter<any>();

  async showScrollToSelectedElement(element: any) {
    this.imprintToggle.emit(false);
    this.displayMenuItem.emit(this.showMenuItems);
    this.showMenuItems = !this.showMenuItems;

    await new Promise((resolve) => setTimeout(resolve, 150));

    const headerElement = document.querySelector(element);
    if (headerElement) {
      headerElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  ngOnInit(): void {}
}
