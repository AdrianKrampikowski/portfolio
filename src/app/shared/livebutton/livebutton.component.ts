import { Component, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-livebutton',
  templateUrl: './livebutton.component.html',
  styleUrls: ['./livebutton.component.scss'],
})
export class LivebuttonComponent {
  @Input() text: string = '';
  @Input() liveButtonUrl: string = '';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  openLiveLink(): void {
    if (this.liveButtonUrl) {
      this.document.defaultView?.open(this.liveButtonUrl, '_blank');
    }
  }
}