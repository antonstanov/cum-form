import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-marital-status',
  templateUrl: './marital-status.component.html',
  styleUrls: ['./marital-status.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MaritalStatusComponent),
      multi: true
    }
  ]
})
export class MaritalStatusComponent implements ControlValueAccessor {
  maritalStatus;

  @Input() selectedGender;

  constructor() {}

  set value(value) {
    this.maritalStatus = value;
    this.onChange(value);
    this.onTouch(value);
  }

  onChange: any = () => {};

  onTouch: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
