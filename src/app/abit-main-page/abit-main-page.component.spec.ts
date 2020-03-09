import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbitMainPageComponent } from './abit-main-page.component';

describe('AbitMainPageComponent', () => {
  let component: AbitMainPageComponent;
  let fixture: ComponentFixture<AbitMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbitMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbitMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
