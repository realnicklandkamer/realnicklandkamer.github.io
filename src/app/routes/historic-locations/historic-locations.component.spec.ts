import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricLocationsComponent } from './historic-locations.component';

describe('HistoricLocationsComponent', () => {
  let component: HistoricLocationsComponent;
  let fixture: ComponentFixture<HistoricLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
