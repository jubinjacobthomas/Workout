import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddworkoutTxnComponent } from './addworkout-txn.component';

describe('AddworkoutTxnComponent', () => {
  let component: AddworkoutTxnComponent;
  let fixture: ComponentFixture<AddworkoutTxnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddworkoutTxnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddworkoutTxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
