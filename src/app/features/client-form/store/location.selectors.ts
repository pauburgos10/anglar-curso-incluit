import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClients from './location.reducer';

export const selectProvince = createFeatureSelector<fromClients.ILocation>('location');
export const selectDataProvinces = createSelector(selectProvince, (state: fromClients.ILocation) => {
  if (state.isFetchCompleted) {
    return state.provinces;
  }
});

export const selectCities = createFeatureSelector<fromClients.ILocation>('location');
export const selectDataCities = createSelector(selectCities, (state: fromClients.ILocation) => {  
  if (state.isFetchCompleted) {
    return state.cities;
  }
});

export const selectClients = createFeatureSelector<fromClients.ILocation>('location');
export const selectDataClients = createSelector(selectClients, (state: fromClients.ILocation) => {
    return state.clients;
});

