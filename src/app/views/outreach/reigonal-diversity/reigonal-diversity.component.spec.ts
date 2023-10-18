import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReigonalDiversityComponent } from './reigonal-diversity.component';

describe('ReigonalDiversityComponent', () => {
  let component: ReigonalDiversityComponent;
  let fixture: ComponentFixture<ReigonalDiversityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReigonalDiversityComponent]
    });
    fixture = TestBed.createComponent(ReigonalDiversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
