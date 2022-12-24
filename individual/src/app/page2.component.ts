import { Component } from '@angular/core';
import { CubeIconComponent } from './icons/cube-icon.component';
import { DocumentIconComponent } from './icons/document-icon.component';
import { GiftIconComponent } from './icons/gift-icon.component';
import { InboxIconComponent } from './icons/inbox-icon.component';
import { KeyIconComponent } from './icons/key-icon.component';

@Component({
  standalone: true,
  selector: 'general-page2',
  imports: [
    CubeIconComponent,
    DocumentIconComponent,
    GiftIconComponent,
    InboxIconComponent,
    KeyIconComponent,
  ],
  template: `
    <h2>Page1</h2>
    <individual-cube-icon class="icon"></individual-cube-icon>
    <individual-document-icon class="icon"></individual-document-icon>
    <individual-gift-icon class="icon"></individual-gift-icon>
    <individual-inbox-icon class="icon"></individual-inbox-icon>
    <individual-key-icon class="icon"></individual-key-icon>
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
