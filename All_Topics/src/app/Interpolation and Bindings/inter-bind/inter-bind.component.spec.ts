import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterBindComponent } from './inter-bind.component';

describe('InterBindComponent', () => {
  let component: InterBindComponent;
  let fixture: ComponentFixture<InterBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterBindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
