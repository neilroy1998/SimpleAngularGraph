import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispGraphComponent } from './disp-graph.component';

describe('DispGraphComponent', () => {
  let component: DispGraphComponent;
  let fixture: ComponentFixture<DispGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
