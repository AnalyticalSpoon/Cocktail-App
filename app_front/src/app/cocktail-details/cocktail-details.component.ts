import { Component, Input, OnInit } from '@angular/core';
import { CocktailsDataService } from '../cocktails-data.service';
import { Cocktail } from '../interfaces/cocktail';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  @Input() cocktail!: Cocktail;

  constructor(private cocktailsService: CocktailsDataService) {}

  ngOnInit(): void {
    this.cocktailsService
      .getCocktails()
      .subscribe((cocktails) => (this.cocktail = cocktails[0]));
  }
}
