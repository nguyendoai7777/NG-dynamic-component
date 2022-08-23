import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCpnComponent } from './dynamic-cpn.component';

describe('DynamicCpnComponent', () => {
  let component: DynamicCpnComponent;
  let fixture: ComponentFixture<DynamicCpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCpnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicCpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
