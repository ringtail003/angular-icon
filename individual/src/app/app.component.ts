import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'angular-icon-root',
  imports: [RouterModule],
  template: `<h1>Individual</h1>
    <ul>
      <li><a routerLink="page1">Page1</a></li>
      <li><a routerLink="page2">Page2</a></li>
    </ul>
    <router-outlet></router-outlet>`,
})
export class AppComponent {}
