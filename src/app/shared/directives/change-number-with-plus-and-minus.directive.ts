import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeNumberWithPlusAndMinus]'
})
export class ChangeNumberWithPlusAndMinusDirective {
  @HostListener('keydown', ['$event']) onKeyDown(event): void {
    if(event.keyCode === 187) this.decrease();
    if(event.keyCode === 189) this.increase();
  }

  decrease(): void {
  }

  increase(): void {
  }
}
