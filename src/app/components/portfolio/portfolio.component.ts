import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolioExamples: any[] = [
    {
      url: '../../../assets/img/portfolioPokedex.png',
      title: 'Pokedex',
      stack: 'JavaScript | HTML | CSS | Api',
      projectDescription:
        'Basierend auf der PokéAPI eine einfache Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert.',
      githubLink: 'https://github.com/AdrianKrampikowski/pokedex',
      liveLink: 'https://pokedex.adrian-krampikowski.com/',
      alligmentClass: 'move-left',
    },
    {
      url: '../../../assets/img/portfolioEPL.png',
      title: 'El Pollo Loco',
      stack: 'JavaScript | HTML | CSS',
      projectDescription:
        'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Giftflaschen zu finden, um gegen das Killerhuhn zu kämpfen.',
      githubLink: 'https://github.com/AdrianKrampikowski/ElPolloLoco',
      liveLink: 'https://elpolloloco.adrian-krampikowski.com/',
      alligmentClass: 'move-right',
    },
    {
      url: '../../../assets/img/portfolioJoin.png',
      title: 'Join',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase ',
      projectDescription:
        'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu. ',
      githubLink: 'https://github.com/AdrianKrampikowski/join',
      liveLink: 'https://join.adrian-krampikowski.com/',
      alligmentClass: 'move-left',
    },
    {
      url: '../../../assets/img/portfolioDABubble.png',
      title: 'DABubble',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase ',
      projectDescription:
        'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu. ',
      githubLink: 'https://github.com/AdrianKrampikowski/dabubble',
      liveLink: 'https://dabubble.adrian-krampikowski.com/',
      alligmentClass: 'move-right',
    },
  ];

  ngOnInit(): void {}
}
