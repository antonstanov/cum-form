import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormResultComponent } from './form-result.component';
import { FormResultRoutingModule } from './form-result-routing.module';

@NgModule({
  declarations: [FormResultComponent],
  imports: [CommonModule, FormResultRoutingModule]
})
export class FormResultModule {}
