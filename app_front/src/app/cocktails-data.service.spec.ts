import { TestBed } from '@angular/core/testing';

import { CocktailsDataService } from './cocktails-data.service';

describe('CocktailsDataService', () => {
  let service: CocktailsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
