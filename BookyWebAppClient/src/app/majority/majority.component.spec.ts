import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorityComponent } from './majority.component';

describe('MajorityComponent', () => {
  let component: MajorityComponent;
  let fixture: ComponentFixture<MajorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
