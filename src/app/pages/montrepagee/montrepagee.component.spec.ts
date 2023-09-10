import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontrepageeComponent } from './montrepagee.component';

describe('MontrepageeComponent', () => {
  let component: MontrepageeComponent;
  let fixture: ComponentFixture<MontrepageeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontrepageeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontrepageeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
