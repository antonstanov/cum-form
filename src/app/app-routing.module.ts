import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormResultGuard } from './modules/form-result/form-result.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'main-form',
        pathMatch: 'full'
      },
      {
        path: 'main-form',
        loadChildren: () =>
          import('./modules/main-form/main-form.module').then(
            m => m.MainFormModule
          )
      },
      {
        path: 'form-result',
        loadChildren: () =>
          import('./modules/form-result/form-result.module').then(
            m => m.FormResultModule
          ),
        canActivate: [FormResultGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
