import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscsComponent } from './escs.component';

describe('EscsComponent', () => {
  let component: EscsComponent;
  let fixture: ComponentFixture<EscsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscsComponent]
    });
    fixture = TestBed.createComponent(EscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
