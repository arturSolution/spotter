import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcorrenciaItem } from './ocorrencia-item';

describe('OcorrenciaItem', () => {
  let component: OcorrenciaItem;
  let fixture: ComponentFixture<OcorrenciaItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcorrenciaItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcorrenciaItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
