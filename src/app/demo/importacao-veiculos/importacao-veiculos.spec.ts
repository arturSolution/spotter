import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportacaoVeiculos } from './importacao-veiculos';

describe('ImportacaoVeiculos', () => {
  let component: ImportacaoVeiculos;
  let fixture: ComponentFixture<ImportacaoVeiculos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportacaoVeiculos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportacaoVeiculos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
