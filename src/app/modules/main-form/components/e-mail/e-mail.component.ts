import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-e-mail',
  templateUrl: './e-mail.component.html',
  styleUrls: ['./e-mail.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EMailComponent),
      multi: true
    }
  ]
})
export class EMailComponent implements ControlValueAccessor, OnInit {
  eMail: string;

  constructor() {}

  set value(value) {
    this.onChange(value);
    this.onTouch(value);
  }

  ngOnInit(): void {}

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
