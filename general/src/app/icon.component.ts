import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'general-icon',
  template: ` <svg width="0" height="0" fill="currentColor">
    <use
      attr.href="assets/{{ icon }}.svg#svg"
      attr.xllink:href="assets/{{ icon }}.svg#svg"
    ></use>
  </svg>`,
  styles: [
    `
      svg {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class IconComponent {
  @Input() icon!: string;
}
