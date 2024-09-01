import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContriesListComponent } from './contries-list.component';

describe('ContriesListComponent', () => {
  let component: ContriesListComponent;
  let fixture: ComponentFixture<ContriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContriesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
