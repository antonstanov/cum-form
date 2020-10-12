import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IMainForm } from '../shared/interfaces/main-form.interface';

export interface FormResultState extends EntityState<IMainForm> {
  formResult: IMainForm;
}

const initialState: FormResultState = {
  formResult: {
    name: null,
    gender: null,
    date: null,
    maritalStatus: null,
    amountChildren: null,
    eMail: null,
    comment: null
  }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'formResult' })
export class FormResultStore extends EntityStore<FormResultState, IMainForm> {
  constructor() {
    super(initialState);
  }
}
