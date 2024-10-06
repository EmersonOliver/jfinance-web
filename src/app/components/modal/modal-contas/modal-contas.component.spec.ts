import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContasComponent } from './modal-contas.component';

describe('ModalContasComponent', () => {
  let component: ModalContasComponent;
  let fixture: ComponentFixture<ModalContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
