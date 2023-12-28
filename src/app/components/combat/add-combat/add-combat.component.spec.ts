import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCombatComponent } from './add-combat.component';

describe('AddCombatComponent', () => {
  let component: AddCombatComponent;
  let fixture: ComponentFixture<AddCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCombatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
