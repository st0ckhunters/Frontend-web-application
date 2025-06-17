import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-buttons',
  imports: [],
  templateUrl: './generic-buttons.component.html',
  styleUrl: './generic-buttons.component.css'
})
export class GenericButtonsComponent {
  @Input() link!: string; // requerido
  @Input() external: boolean = false;
  @Input() target: string = '_self';
  @Input() variant: string = 'default';
  @Input() customClass: string = '';
  @Input() icon: string = '';
  @Input() iconVariant: string = 'default';

  @Input() type?: string;
  @Input() form?: string;

  get buttonClass(): string {
    return `variant-button-${this.variant} ${this.customClass}`.trim();
  }
}
