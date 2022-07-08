import { Component, OnInit } from '@angular/core';
import { CocktailsDataService } from '../cocktails-data.service';
import { Cocktail } from '../interfaces/cocktail';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss'],
})
export class CocktailsListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailsDataService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((cocktails) => {
      this.cocktails = cocktails;
    });
  }
}
