import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDComponent } from './rd.component';

describe('RDComponent', () => {
  let component: RDComponent;
  let fixture: ComponentFixture<RDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RDComponent]
    });
    fixture = TestBed.createComponent(RDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
