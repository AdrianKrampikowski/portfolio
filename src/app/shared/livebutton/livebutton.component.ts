import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livebutton',
  templateUrl: './livebutton.component.html',
  styleUrls: ['./livebutton.component.scss'],
})
export class LivebuttonComponent {
  constructor() {}
  @Input() text = '';
  @Input() liveButtonUrl = '';

  openLiveLink() {
    window.open(this.liveButtonUrl, '_blank');
  }
}
