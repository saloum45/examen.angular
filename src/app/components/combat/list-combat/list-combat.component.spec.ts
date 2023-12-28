import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCombatComponent } from './list-combat.component';

describe('ListCombatComponent', () => {
  let component: ListCombatComponent;
  let fixture: ComponentFixture<ListCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCombatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
