import { Component } from '@angular/core';
import { IconComponent } from './icon.component';

@Component({
  standalone: true,
  selector: 'general-page2',
  imports: [IconComponent],
  template: `
    <h2>Page2</h2>
    <general-icon [icon]="'cube'"></general-icon>
    <general-icon [icon]="'document'"></general-icon>
    <general-icon [icon]="'gift'"></general-icon>
    <general-icon [icon]="'inbox'"></general-icon>
    <general-icon [icon]="'key'"></general-icon>
  `,
  styles: [
    `
      general-icon {
        display: inline-block;
        width: 2rem;
        height: 2rem;
      }
    `,
  ],
})
export default class Page2Component {}
