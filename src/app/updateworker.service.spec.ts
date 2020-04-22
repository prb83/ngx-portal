import { TestBed } from '@angular/core/testing'

import { UpdateworkerService } from './updateworker.service'

describe('UpdateworkerService', () => {
  let service: UpdateworkerService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UpdateworkerService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
