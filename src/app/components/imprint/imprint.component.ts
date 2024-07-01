import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent {
  showImprintItems: boolean = true;
  @Input() imprintInputNewValue: boolean = false;
  @Output() disableImprintItem = new EventEmitter<any>();

  disableImprint() {
    this.showImprintItems = !this.showImprintItems;
    this.disableImprintItem.emit(this.showImprintItems);
  }
}
