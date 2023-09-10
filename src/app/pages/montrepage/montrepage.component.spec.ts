import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontrepageComponent } from './montrepage.component';

describe('MontrepageComponent', () => {
  let component: MontrepageComponent;
  let fixture: ComponentFixture<MontrepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontrepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontrepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
