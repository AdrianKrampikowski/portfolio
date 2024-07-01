import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gitbutton',
  templateUrl: './gitbutton.component.html',
  styleUrls: ['./gitbutton.component.scss'],
})
export class GitbuttonComponent implements OnInit {
  constructor() {}
  @Input() text = '';
  @Input() githubButtonUrl = '';

  openGithubLink() {
    window.open(this.githubButtonUrl, '_blank');
  }

  ngOnInit(): void {}
}
