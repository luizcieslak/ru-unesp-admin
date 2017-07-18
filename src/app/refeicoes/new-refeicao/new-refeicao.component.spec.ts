import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRefeicaoComponent } from './new-refeicao.component';

describe('NewRefeicaoComponent', () => {
  let component: NewRefeicaoComponent;
  let fixture: ComponentFixture<NewRefeicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRefeicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
