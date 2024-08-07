import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleListComponent } from './raffle-list.component';

describe('RaffleListComponent', () => {
  let component: RaffleListComponent;
  let fixture: ComponentFixture<RaffleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaffleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaffleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
