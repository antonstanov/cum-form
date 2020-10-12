import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormResultComponent } from './form-result.component';

const routes: Routes = [
  {
    path: '',
    component: FormResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormResultRoutingModule {}
