import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalServerErrorsComponent } from './internal-server-errors.component';

describe('InternalServerErrorsComponent', () => {
  let component: InternalServerErrorsComponent;
  let fixture: ComponentFixture<InternalServerErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalServerErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalServerErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
