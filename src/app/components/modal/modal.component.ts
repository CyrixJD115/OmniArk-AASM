import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() show = false;
  @Input() maxWidth: string = '';
  @Output() close = new EventEmitter<void>();
}
