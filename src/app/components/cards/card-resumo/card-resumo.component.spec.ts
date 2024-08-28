import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResumoComponent } from './card-resumo.component';

describe('CardResumoComponent', () => {
  let component: CardResumoComponent;
  let fixture: ComponentFixture<CardResumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardResumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
