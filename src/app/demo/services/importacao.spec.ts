import { TestBed } from '@angular/core/testing';

import { Importacao } from './importacao';

describe('Importacao', () => {
  let service: Importacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Importacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
