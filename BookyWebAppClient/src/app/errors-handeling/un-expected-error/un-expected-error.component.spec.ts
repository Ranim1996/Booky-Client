import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnExpectedErrorComponent } from './un-expected-error.component';

describe('UnExpectedErrorComponent', () => {
  let component: UnExpectedErrorComponent;
  let fixture: ComponentFixture<UnExpectedErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnExpectedErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnExpectedErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
