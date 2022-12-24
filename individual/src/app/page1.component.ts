import { Component } from '@angular/core';
import { BellIconComponent } from './icons/bell-icon.component';
import { BookmarkIconComponent } from './icons/bookmark-icon.component';
import { CalculatorIconComponent } from './icons/calculator-icon.component copy';
import { CalendarIconComponent } from './icons/calendar-icon.component';
import { CloudIconComponent } from './icons/cloud-icon.component';

@Component({
  standalone: true,
  selector: 'general-page1',
  imports: [
    BellIconComponent,
    BookmarkIconComponent,
    CalculatorIconComponent,
    CalendarIconComponent,
    CloudIconComponent,
  ],
  template: `
    <h2>Page1</h2>
    <individual-bell-icon class="icon"></individual-bell-icon>
    <individual-bookmark-icon class="icon"></individual-bookmark-icon>
    <individual-calculator-icon class="icon"></individual-calculator-icon>
    <individual-calendar-icon class="icon"></individual-calendar-icon>
    <individual-cloud-icon class="icon"></individual-cloud-icon>
  `,
  styles: [
    `
      .icon {
        display: inline-block;
        width: 2rem;
        height: 2rem;
      }
    `,
  ],
})
export default class Page1Component {}
