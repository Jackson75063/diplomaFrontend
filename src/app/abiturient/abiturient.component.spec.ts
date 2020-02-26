import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiturientComponent } from './abiturient.component';

describe('AbiturientComponent', () => {
  let component: AbiturientComponent;
  let fixture: ComponentFixture<AbiturientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbiturientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiturientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
