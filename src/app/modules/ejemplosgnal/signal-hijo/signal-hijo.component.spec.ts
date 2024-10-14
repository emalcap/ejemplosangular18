import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalHijoComponent } from './signal-hijo.component';

describe('SignalHijoComponent', () => {
  let component: SignalHijoComponent;
  let fixture: ComponentFixture<SignalHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
