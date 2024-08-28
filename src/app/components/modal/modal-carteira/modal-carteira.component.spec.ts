import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCarteiraComponent } from './modal-carteira.component';

describe('ModalCarteiraComponent', () => {
  let component: ModalCarteiraComponent;
  let fixture: ComponentFixture<ModalCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCarteiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
