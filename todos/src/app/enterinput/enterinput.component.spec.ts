import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterinputComponent } from './enterinput.component';

describe('EnterinputComponent', () => {
  let component: EnterinputComponent;
  let fixture: ComponentFixture<EnterinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
