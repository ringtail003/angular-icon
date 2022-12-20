import { Component } from '@angular/core';

@Component({
  selector: 'angular-icon-root',
  templateUrl: './app.component.html',
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
export class AppComponent {
  title = 'individual';
}
