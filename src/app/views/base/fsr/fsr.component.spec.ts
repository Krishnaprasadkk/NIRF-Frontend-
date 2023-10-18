import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsrComponent } from './fsr.component';

describe('FsrComponent', () => {
  let component: FsrComponent;
  let fixture: ComponentFixture<FsrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FsrComponent]
    });
    fixture = TestBed.createComponent(FsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
