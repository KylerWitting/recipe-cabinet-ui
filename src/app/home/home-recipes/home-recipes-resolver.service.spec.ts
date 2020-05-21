import { TestBed } from '@angular/core/testing';

import { HomeRecipesResolver } from './home-recipes-resolver.service';

describe('HomeRecipesResolverService', () => {
  let service: HomeRecipesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeRecipesResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
