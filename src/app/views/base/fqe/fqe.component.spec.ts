import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FqeComponent } from './fqe.component';

describe('FqeComponent', () => {
  let component: FqeComponent;
  let fixture: ComponentFixture<FqeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FqeComponent]
    });
    fixture = TestBed.createComponent(FqeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
