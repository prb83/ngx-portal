import { TestBed } from '@angular/core/testing'

import { LogSecondService } from './log-second.service'

describe('LogSecondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: LogSecondService = TestBed.get(LogSecondService)
    expect(service).toBeTruthy()
  })
})
