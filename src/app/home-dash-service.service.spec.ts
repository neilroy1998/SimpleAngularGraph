import { TestBed } from '@angular/core/testing';

import { HomeDashServiceService } from './home-dash-service.service';

describe('HomeDashServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeDashServiceService = TestBed.get(HomeDashServiceService);
    expect(service).toBeTruthy();
  });
});
