import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpppComponent } from './fppp.component';

describe('FpppComponent', () => {
  let component: FpppComponent;
  let fixture: ComponentFixture<FpppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FpppComponent]
    });
    fixture = TestBed.createComponent(FpppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
