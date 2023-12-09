import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() task: string = '';
  @Input() isChecked: boolean = false;
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  toggleCheck(): void {
    this.toggle.emit();
  }

}
