import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylPageComponent } from './vinyl-page.component';

describe('VinylPageComponent', () => {
  let component: VinylPageComponent;
  let fixture: ComponentFixture<VinylPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinylPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
