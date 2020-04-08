import { Client } from './../../client-list/models/client/client.model';
import { Action } from '@ngrx/store';

export enum LocationActionsTypes {
  FETCH_PROVINCES = '[LOCATION:  FETCH_PROVINCES] Last',
  FETCH_PROVINCES_FULFILLED = '[LOCATION:  FETCH_PROVINCES_FULFILLED]',
  FETCH_CITIES = '[LOCATION:  FETCH_CITIES]',
  FETCH_CITIES_FULFILLED = '[LOCATION:  FETCH_CITIES_FULFILLED]',
  FETCH_ERROR = '[LOCATION: ERROR]  Last',
  CLEAR_DATA = '[LOCATION: CLEAR DATA]',
  SAVE_CLIENT = '[CLIENT: SAVE]'
}

export class FetchProvinces implements Action {
  readonly type = LocationActionsTypes.FETCH_PROVINCES;
  constructor() { }
}

export class FetchProvincesFulfilled implements Action {
  readonly type = LocationActionsTypes.FETCH_PROVINCES_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchCities implements Action {
  readonly type = LocationActionsTypes.FETCH_CITIES;
  constructor(public payload: any) { }
}

export class FetchCitiesFulfilled implements Action {
  readonly type = LocationActionsTypes.FETCH_CITIES_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = LocationActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = LocationActionsTypes.CLEAR_DATA;
}

export class SaveClient implements Action {
  readonly type = LocationActionsTypes.SAVE_CLIENT;
  constructor(public payload: Client) { }
}

export type LocationActions =
  FetchProvinces |
  FetchProvincesFulfilled |
  FetchCities |
  FetchCitiesFulfilled |
  FetchError |
  ClearData |
  SaveClient;
