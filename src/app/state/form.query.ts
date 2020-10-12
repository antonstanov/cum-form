import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { FormResultState, FormResultStore } from './form.store';
import { IMainForm } from '../shared/interfaces/main-form.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormResultQuery extends QueryEntity<FormResultState, IMainForm> {
  formResult$: Observable<IMainForm> = this.select(state => state.formResult);

  constructor(protected store: FormResultStore) {
    super(store);
  }
}
