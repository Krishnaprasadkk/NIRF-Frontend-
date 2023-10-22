import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuComponent } from './pu.component';

describe('PuComponent', () => {
  let component: PuComponent;
  let fixture: ComponentFixture<PuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuComponent]
    });
    fixture = TestBed.createComponent(PuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
