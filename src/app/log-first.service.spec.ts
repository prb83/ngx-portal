import { TestBed } from '@angular/core/testing';

import { LogFirstService } from './log-first.service';

describe('LogFirstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogFirstService = TestBed.get(LogFirstService);
    expect(service).toBeTruthy();
  });
});
