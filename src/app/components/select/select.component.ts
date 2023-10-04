import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { INgxSelectOption } from 'ngx-select-ex';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() items: any[] = [];
  @Input() multiple = false;
  @Input() optionValueField: string = '';
  @Input() optionTextField: string = '';
  @Input() controlName: string = '';
  @Input() keepSelectMenuOpened = true;
  @Input() allowClear = false;
  @Input() keepSelectedItems = false;
  @Output() open = new EventEmitter<boolean>();

  @Output() selectedOptions = new EventEmitter();

  onChange(change: INgxSelectOption[]) {
    this.selectedOptions.emit({
      value: change.map((item) => item.value),
      controlName: this.controlName,
    });
  }

  openSelect() {
    this.open.emit(true);
  }
}
