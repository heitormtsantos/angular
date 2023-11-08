import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDesaparecidoComponent } from './detalhes-desaparecido.component';

describe('DetalhesDesaparecidoComponent', () => {
  let component: DetalhesDesaparecidoComponent;
  let fixture: ComponentFixture<DetalhesDesaparecidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesDesaparecidoComponent]
    });
    fixture = TestBed.createComponent(DetalhesDesaparecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
