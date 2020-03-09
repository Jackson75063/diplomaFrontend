import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSubjTestComponent } from './map-subj-test.component';

describe('MapSubjTestComponent', () => {
  let component: MapSubjTestComponent;
  let fixture: ComponentFixture<MapSubjTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSubjTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSubjTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
