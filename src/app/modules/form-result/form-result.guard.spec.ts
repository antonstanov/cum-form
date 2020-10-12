import { TestBed } from '@angular/core/testing';

import { FormResultGuard } from './form-result.guard';

describe('FormResultGuard', () => {
  let guard: FormResultGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormResultGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
