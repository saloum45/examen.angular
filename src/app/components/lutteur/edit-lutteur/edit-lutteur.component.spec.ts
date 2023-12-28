import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLutteurComponent } from './edit-lutteur.component';

describe('EditLutteurComponent', () => {
  let component: EditLutteurComponent;
  let fixture: ComponentFixture<EditLutteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLutteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditLutteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
