interface Ingredient {
  name: string;
  quantity: string;
  unit?: string;
}

export interface Cocktail {
  name: string;
  description?: string;
  family?: string;
  ingredients: Ingredient[];
  directions: string;
}
