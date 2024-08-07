import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawRaffleComponent } from './draw-raffle.component';

describe('DrawRaffleComponent', () => {
  let component: DrawRaffleComponent;
  let fixture: ComponentFixture<DrawRaffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawRaffleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawRaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
