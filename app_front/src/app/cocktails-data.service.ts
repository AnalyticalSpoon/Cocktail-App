import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, of } from 'rxjs';
import { Cocktail } from './interfaces/cocktail';
import { FilestackResponse } from './interfaces/filestack';

@Injectable({
  providedIn: 'root',
})
export class CocktailsDataService {
  constructor(private http: HttpClient) {}

  private apiBaseUrl = environment.apiBaseUrl;

  public getCocktails(): Observable<Cocktail[]> {
    const url: string = `${this.apiBaseUrl}/cocktails`;
    return this.http
      .get<Cocktail[]>(url)
      .pipe(catchError(this.handleError<Cocktail[]>(`getCocktails`)));
  }

  public getCocktailById(cocktailId: string): Observable<Cocktail> {
    const url: string = `${this.apiBaseUrl}/cocktails/${cocktailId}`;
    return this.http
      .get<Cocktail>(url)
      .pipe(
        catchError(
          this.handleError<Cocktail>(`getCocktailById id=${cocktailId}`)
        )
      );
  }

  public addCocktail(formData: Cocktail): Observable<Cocktail> {
    console.log(`Request to add cocktail: ${JSON.stringify(formData)}`);
    const url: string = `${this.apiBaseUrl}/cocktails`;
    return this.http
      .post<Cocktail>(url, formData)
      .pipe(
        catchError(
          this.handleError<Cocktail>(`addCocktail formData=${formData}`)
        )
      );
  }

  public uploadPicture(file: File): Observable<FilestackResponse> {
    return this.http
      .post<FilestackResponse>(
        'https://www.filestackapi.com/api/store/S3?key=Am5JkdXjxTQSK424sKxf4z',
        file
      )
      .pipe(
        catchError(
          this.handleError<FilestackResponse>(
            `error while uploading file: ${file}`
          )
        )
      );
  }

  public deleteCocktail(cocktailId: string): Observable<Cocktail> {
    const url: string = `${this.apiBaseUrl}/cocktails/${cocktailId}`;
    return this.http
      .delete<Cocktail>(url)
      .pipe(
        catchError(
          this.handleError<Cocktail>(`deleteCocktail id=${cocktailId}`)
        )
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
