import { LocationService } from './../services/location.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LocationActionsTypes } from './location.actions';

@Injectable()
export class LocationEffects {
  constructor(private actions$: Actions, private locationService: LocationService) { }

  @Effect() getProvinces$ = this.actions$.pipe(
    ofType(LocationActionsTypes.FETCH_PROVINCES),
    switchMap( _  => {
      return this.locationService.loadProvinces().pipe(
        map(response => ({ type: LocationActionsTypes.FETCH_PROVINCES_FULFILLED, payload: response.provincias })),
        catchError((err: HttpErrorResponse) => of({ type: LocationActionsTypes.FETCH_ERROR, payload: err })),
      );
    }),
  );

  @Effect() getCity$ = this.actions$.pipe(ofType(LocationActionsTypes.FETCH_CITIES)).pipe(
    map((action: any) => action.payload),
    switchMap((payload: any) => {
      return this.locationService.loadCities(payload).pipe(
        map(response => ({ type: LocationActionsTypes.FETCH_CITIES_FULFILLED, payload: response })),
          catchError((err: HttpErrorResponse) => of({ type: LocationActionsTypes.FETCH_ERROR, payload: err })),
        );
    }),
  );
}
