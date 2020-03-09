import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishMapComponent } from './finish-map.component';

describe('FinishMapComponent', () => {
  let component: FinishMapComponent;
  let fixture: ComponentFixture<FinishMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
