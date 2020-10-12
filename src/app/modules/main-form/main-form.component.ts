import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { inputRegExpValidator } from '../../shared/helpers/validators/input-reg-exp-alidator';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { PersistNgFormPlugin } from '@datorama/akita';
import { FormResultQuery } from '../../state/form.query';
import { FormResultStore } from '../../state/form.store';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit, AfterViewInit, OnDestroy {
  mainForm: FormGroup;
  persistForm: PersistNgFormPlugin;

  hasMaritalStatus: boolean;
  selectedGender: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private formResultStore: FormResultStore,
    private formResultQuery: FormResultQuery
  ) {}

  private setForm(): void {
    const onlyCyrillic = /^[-?!,.а-яА-ЯёЁ0-9\s]+$/;

    this.mainForm = this.fb.group({
      name: [
        '',
        [Validators.required, inputRegExpValidator(onlyCyrillic)]
      ],
      gender: ['', [Validators.required]],
      date: ['', [Validators.required]],
      maritalStatus: [''],
      amountChildren: [''],
      eMail: ['', [Validators.required, Validators.email]],
      comment: ['', [inputRegExpValidator(onlyCyrillic)]]
    });

    this.persistForm = new PersistNgFormPlugin(
      this.formResultQuery,
      'formResult'
    ).setForm(this.mainForm);
  }

  private setMaritalStatus(): void {
    this.mainForm
      .get('date')
      .valueChanges.pipe(
      untilDestroyed(this),
      debounceTime(400),
      distinctUntilChanged()
    )
      .subscribe((data: Date) => {
        const nowDate: Date = new Date();
        const selectedDate: Date = data;

        this.hasMaritalStatus =
          selectedDate &&
          nowDate.getFullYear() - selectedDate.getFullYear() > 18;

        if (this.hasMaritalStatus) {
          this.mainForm.get('maritalStatus').setValidators(Validators.required);
          this.mainForm.updateValueAndValidity();
        } else {
          this.mainForm.get('maritalStatus').clearValidators();
          this.mainForm.updateValueAndValidity();
        }
      });
  }

  private setSelectedGender(): void {
    this.mainForm
      .get('gender')
      .valueChanges.pipe(untilDestroyed(this))
      .subscribe(data => {
        this.selectedGender = data.value;
      });
  }

  ngOnInit(): void {
    this.setForm();
  }

  ngAfterViewInit(): void {
    this.setMaritalStatus();
    this.setSelectedGender();
  }

  ngOnDestroy(): void {}

  submitHandler(): void {
    // @ts-ignore
    this.formResultStore.set(this.mainForm);

    this.router.navigate(['form-result'], { relativeTo: this.route.root });
  }
}
