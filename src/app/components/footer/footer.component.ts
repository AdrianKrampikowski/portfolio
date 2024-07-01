import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor() {}
  showImprintItem: boolean = false;
  @Input() imprintInputNewValue: boolean = false;
  @Output() displayImprintItem = new EventEmitter<any>();

  showImprint() {
    this.showImprintItem = !this.showImprintItem;
    this.displayImprintItem.emit(this.showImprintItem);
  }

  ngOnInit(): void {}
}
