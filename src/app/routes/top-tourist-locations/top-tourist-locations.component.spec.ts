import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTouristLocationsComponent } from './top-tourist-locations.component';

describe('TopTouristLocationsComponent', () => {
  let component: TopTouristLocationsComponent;
  let fixture: ComponentFixture<TopTouristLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTouristLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTouristLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
