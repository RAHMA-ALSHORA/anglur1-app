import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefoltComponent } from './defolt.component';

describe('DefoltComponent', () => {
  let component: DefoltComponent;
  let fixture: ComponentFixture<DefoltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefoltComponent]
    });
    fixture = TestBed.createComponent(DefoltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
