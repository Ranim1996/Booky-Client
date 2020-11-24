import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromMyListComponent } from './remove-from-my-list.component';

describe('RemoveFromMyListComponent', () => {
  let component: RemoveFromMyListComponent;
  let fixture: ComponentFixture<RemoveFromMyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFromMyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFromMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
