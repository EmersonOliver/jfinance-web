import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLancamentosComponent } from './modal-lancamentos.component';

describe('ModalLancamentosComponent', () => {
  let component: ModalLancamentosComponent;
  let fixture: ComponentFixture<ModalLancamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLancamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
