import { TestBed } from '@angular/core/testing';

import { MyFavoriteService } from './my-favorite.service';

describe('MyFavoriteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFavoriteService = TestBed.get(MyFavoriteService);
    expect(service).toBeTruthy();
  });
});
