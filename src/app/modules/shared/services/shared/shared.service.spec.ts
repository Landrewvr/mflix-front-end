import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have genre subject created', () => {
    expect(service.genre).toBeTruthy();
  });

  it('should have showMenu subject created', () => {
    expect(service.showMenu).toBeTruthy();
  });


});
