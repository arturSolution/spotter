import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoItem } from './veiculo-item';

describe('VeiculoItem', () => {
  let component: VeiculoItem;
  let fixture: ComponentFixture<VeiculoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiculoItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
