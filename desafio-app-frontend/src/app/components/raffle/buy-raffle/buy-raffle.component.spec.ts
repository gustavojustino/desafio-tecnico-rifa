import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyRaffleComponent } from './buy-raffle.component';

describe('BuyRaffleComponent', () => {
  let component: BuyRaffleComponent;
  let fixture: ComponentFixture<BuyRaffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyRaffleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyRaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
