import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCombatComponent } from './edit-combat.component';

describe('EditCombatComponent', () => {
  let component: EditCombatComponent;
  let fixture: ComponentFixture<EditCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCombatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
