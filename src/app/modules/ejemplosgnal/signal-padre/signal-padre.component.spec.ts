import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalPadreComponent } from './signal-padre.component';

describe('SignalPadreComponent', () => {
  let component: SignalPadreComponent;
  let fixture: ComponentFixture<SignalPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
