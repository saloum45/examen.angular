import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLutteurComponent } from './add-lutteur.component';

describe('AddLutteurComponent', () => {
  let component: AddLutteurComponent;
  let fixture: ComponentFixture<AddLutteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLutteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLutteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
