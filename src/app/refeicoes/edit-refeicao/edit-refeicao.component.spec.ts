import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRefeicaoComponent } from './edit-refeicao.component';

describe('EditRefeicaoComponent', () => {
  let component: EditRefeicaoComponent;
  let fixture: ComponentFixture<EditRefeicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRefeicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
