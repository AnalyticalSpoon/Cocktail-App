import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailAddFormComponent } from './cocktail-add-form/cocktail-add-form.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailDetailsComponent,
    CocktailAddFormComponent,
    CocktailsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
