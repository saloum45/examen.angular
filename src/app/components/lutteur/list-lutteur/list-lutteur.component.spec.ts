import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLutteurComponent } from './list-lutteur.component';

describe('ListLutteurComponent', () => {
  let component: ListLutteurComponent;
  let fixture: ComponentFixture<ListLutteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLutteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListLutteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
