import { TestBed, inject } from '@angular/core/testing';
import { HittingService } from './hitting.service';

describe('HittingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HittingService]
    });
  });

  it('should ...', inject([HittingService], (service: HittingService) => {
    expect(service).toBeTruthy();
  }));
});
