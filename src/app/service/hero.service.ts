/* import ng lib */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* import interface */
import { Hero } from '../interface/hero';

/* import rxjs */
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

/* import other service */
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  /* all variables here */
  private heroesUrl = 'https://jsonplaceholder.typicode.com/users';
  private checkIpBaseUrl = 'https://ipify-clone.re4388.now.sh/api/json';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin':
      //   'https://ipify-clone.re4388.now.sh/api/json',
      // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    }),
  };

  // typical server-in-service
  // MessageService inject to HeroService,
  // and then HeroService inject to HeroesComponent
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  /* a log helper to wrap messageService */
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>(`updateHero`))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    // if the input is number, that's it; if it's not number, get id via hero.id
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>(`addHero`))
    );
  }

  /** GET: get a hero from the server */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((_) => this.log(`fetched todo id=${id}`)),
      catchError(this.handleError<Hero>(`get todo id=${id}`))
    );
  }

  /** GET: get a hero from the server */
  getMyIp(): Observable<any> {
    const url = `${this.checkIpBaseUrl}`;
    return this.http.get<any>(url).pipe(
      tap( _ => this.log(`get my ip`)),
      catchError(this.handleError<any>(`fail to get my ip`, ''))
    );
  }

  /** GET: get all heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched todos')),
      catchError(this.handleError<Hero[]>('get todos', []))
    );
  }

  /* GET heroes whose name contains in search term */
  searchHeroes(term: string): Observable<Hero[]> {
    // if no search term, just retrun empty array
    if (!term.trim()) {
      return of([]);
    }
    // search via 一個由搜尋片語成的查詢字串
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found name matching ${term}`)
          : this.log(`no name matching ${term}`)
      ),
      catchError(this.handleError<Hero[]>('searchHeros', []))
    );
  }
}
