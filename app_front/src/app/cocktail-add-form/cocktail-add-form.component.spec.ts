import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailAddFormComponent } from './cocktail-add-form.component';

describe('CocktailAddFormComponent', () => {
  let component: CocktailAddFormComponent;
  let fixture: ComponentFixture<CocktailAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
