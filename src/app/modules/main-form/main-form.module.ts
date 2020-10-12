import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFormComponent } from './main-form.component';
import { NameComponent } from './components/name/name.component';
import { GenderComponent } from './components/gender/gender.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MainFormRoutingModule } from './main-form-routing.module';
import { DateComponent } from './components/date/date.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { EMailComponent } from './components/e-mail/e-mail.component';
import { CommentComponent } from './components/comment/comment.component';
import { MaritalStatusComponent } from './components/marital-status/marital-status.component';
import { MatSelectModule } from '@angular/material/select';
import { AmountChildrenComponent } from './components/amount-children/amount-children.component';
import { CommonUiModule } from '../common-ui/common-ui.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MainFormComponent,
    NameComponent,
    GenderComponent,
    DateComponent,
    EMailComponent,
    CommentComponent,
    MaritalStatusComponent,
    AmountChildrenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonUiModule,
    MainFormRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ]
})
export class MainFormModule {}
