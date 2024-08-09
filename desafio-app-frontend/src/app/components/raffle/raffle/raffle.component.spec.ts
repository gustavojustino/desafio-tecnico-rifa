import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RaffleComponent } from './raffle.component';

describe('RaffleComponent', () => {
  let component: RaffleComponent;
  let fixture: ComponentFixture<RaffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaffleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
