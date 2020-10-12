import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-amount-children',
  templateUrl: './amount-children.component.html',
  styleUrls: ['./amount-children.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AmountChildrenComponent),
      multi: true
    }
  ]
})
export class AmountChildrenComponent implements ControlValueAccessor {
  amountChildren: number;

  constructor() {}

  set value(value) {
    this.amountChildren = value;
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
