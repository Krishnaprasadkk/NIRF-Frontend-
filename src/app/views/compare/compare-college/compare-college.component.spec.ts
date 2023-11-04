import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCollegeComponent } from './compare-college.component';

describe('CompareCollegeComponent', () => {
  let component: CompareCollegeComponent;
  let fixture: ComponentFixture<CompareCollegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareCollegeComponent]
    });
    fixture = TestBed.createComponent(CompareCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
