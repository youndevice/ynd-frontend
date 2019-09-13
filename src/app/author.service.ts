import { Injectable } from '@angular/core';
import {Author} from './author0';
import {AUTHORS} from './mock-authors';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authorsUrl = 'api/authors';  // URL to web api
  constructor( private http: HttpClient,private messageService : MessageService) { }

  getAuthors():Observable<Author[]> {
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<Author[]>(this.authorsUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Author[]>('getAuthors', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Author> {
    const url = `${this.authorsUrl}/${id}`;
    return this.http.get<Author>(url).pipe(
      tap(_ => this.log(`fetched author id=${id}`)),
      catchError(this.handleError<Author>(`getAuthor id=${id}`))
    );
  }
  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
