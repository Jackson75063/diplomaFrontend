import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacultComponent } from './add-facult.component';

describe('AddFacultComponent', () => {
  let component: AddFacultComponent;
  let fixture: ComponentFixture<AddFacultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFacultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFacultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
