import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameComponent),
      multi: true
    }
  ]
})
export class NameComponent implements ControlValueAccessor {
  name: string;

  constructor() {}

  set value(value) {
    this.name = value;
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
