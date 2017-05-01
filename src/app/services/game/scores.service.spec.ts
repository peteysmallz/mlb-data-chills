import { TestBed, inject } from '@angular/core/testing';
import { ScoresService } from './scores.service';

describe('ScoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoresService]
    });
  });

  it('should ...', inject([ScoresService], (service: ScoresService) => {
    expect(service).toBeTruthy();
  }));
});
