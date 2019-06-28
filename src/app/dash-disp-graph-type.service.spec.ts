import { TestBed } from '@angular/core/testing';

import { DashDispGraphTypeService } from './dash-disp-graph-type.service';

describe('DashDispGraphTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashDispGraphTypeService = TestBed.get(DashDispGraphTypeService);
    expect(service).toBeTruthy();
  });
});
