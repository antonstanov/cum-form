import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormResultQuery } from '../../state/form.query';
import { IMainForm } from '../../shared/interfaces/main-form.interface';

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.scss']
})
export class FormResultComponent implements OnInit {
  formResultQuery$: Observable<IMainForm>;
  // isLoading$: Observable<boolean>;

  constructor(private formResultQuery: FormResultQuery) {}

  ngOnInit(): void {
    this.formResultQuery$ = this.formResultQuery.formResult$;
    // this.isLoading$ = this.formResultQuery.selectLoading();
  }
}
