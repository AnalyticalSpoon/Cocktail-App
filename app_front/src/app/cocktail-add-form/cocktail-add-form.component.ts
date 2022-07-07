import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { CocktailsDataService } from '../cocktails-data.service';
import { Cocktail } from '../interfaces/cocktail';

@Component({
  selector: 'app-cocktail-add-form',
  templateUrl: './cocktail-add-form.component.html',
  styleUrls: ['./cocktail-add-form.component.scss'],
})
export class CocktailAddFormComponent implements OnInit {
  cocktailForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    family: [''],
    directions: ['', [Validators.required]],
    ingredients: this.fb.array([], [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailsDataService
  ) {}

  get name() {
    return this.cocktailForm.controls['name'] as FormControl;
  }

  get directions() {
    return this.cocktailForm.controls['directions'] as FormControl;
  }

  get ingredients() {
    return this.cocktailForm.controls['ingredients'] as FormArray;
  }

  public addIngredient() {
    const ingredientForm = this.fb.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      unit: [''],
    });

    this.ingredients.push(ingredientForm);
  }

  public removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  public submitCocktail() {
    if (this.cocktailForm.valid) {
      this.cocktailService
        .addCocktail(this.cocktailForm.value)
        .subscribe((cocktail: Cocktail) => {
          this.resetForm();
        });
    }
  }

  private resetForm(): void {
    this.ingredients.clear();
    this.cocktailForm.reset();
  }

  ngOnInit(): void {}
}
