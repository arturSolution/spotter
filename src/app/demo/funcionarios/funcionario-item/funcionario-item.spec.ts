import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioItem } from './funcionario-item';

describe('FuncionarioItem', () => {
  let component: FuncionarioItem;
  let fixture: ComponentFixture<FuncionarioItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionarioItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
