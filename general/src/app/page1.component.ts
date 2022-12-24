import { Component } from '@angular/core';
import { IconComponent } from './icon.component';

@Component({
  standalone: true,
  selector: 'general-page1',
  imports: [IconComponent],
  template: `
    <h2>Page1</h2>
    <general-icon [icon]="'bell'"></general-icon>
    <general-icon [icon]="'bookmark'"></general-icon>
    <general-icon [icon]="'calculator'"></general-icon>
    <general-icon [icon]="'calendar'"></general-icon>
    <general-icon [icon]="'cloud'"></general-icon>
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
export default class Page1Component {}
