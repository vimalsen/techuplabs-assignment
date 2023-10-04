import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinsModalComponent } from './pins-modal.component';

describe('PinsModalComponent', () => {
  let component: PinsModalComponent;
  let fixture: ComponentFixture<PinsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinsModalComponent]
    });
    fixture = TestBed.createComponent(PinsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
