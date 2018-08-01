import { TestBed, inject } from '@angular/core/testing';

import { CommmentService } from './commment.service';

describe('CommmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommmentService]
    });
  });

  it('should be created', inject([CommmentService], (service: CommmentService) => {
    expect(service).toBeTruthy();
  }));
});
