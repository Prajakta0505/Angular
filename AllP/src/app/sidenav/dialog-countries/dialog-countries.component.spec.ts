import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCountriesComponent } from './dialog-countries.component';

describe('DialogCountriesComponent', () => {
  let component: DialogCountriesComponent;
  let fixture: ComponentFixture<DialogCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
