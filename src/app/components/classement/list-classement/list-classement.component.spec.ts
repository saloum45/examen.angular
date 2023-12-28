import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassementComponent } from './list-classement.component';

describe('ListClassementComponent', () => {
  let component: ListClassementComponent;
  let fixture: ComponentFixture<ListClassementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListClassementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListClassementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
