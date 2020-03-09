import { TestBed } from '@angular/core/testing';

import { AbitutientServiceService } from './abitutient-service.service';

describe('AbitutientServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbitutientServiceService = TestBed.get(AbitutientServiceService);
    expect(service).toBeTruthy();
  });
});
