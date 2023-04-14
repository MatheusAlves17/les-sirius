import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackSuccessComponent } from './snack-success.component';

describe('SnackSuccessComponent', () => {
  let component: SnackSuccessComponent;
  let fixture: ComponentFixture<SnackSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
