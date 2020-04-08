import { Client } from './../../client-list/models/client/client.model';
import { LocationActions, LocationActionsTypes } from './location.actions';

export interface ILocation {
  data: any;
  provinces: any;
  cities: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
  clients: Client[];
}

export const initialState: ILocation = {
  data: null,
  cities: null,
  provinces: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
  clients: []
};

export function reducer(state = initialState, action: LocationActions): ILocation {
  switch (action.type) {
    case LocationActionsTypes.FETCH_PROVINCES:
      return {
        ...state,
        pending: true,
        isFetchCompleted: false
      };

    case LocationActionsTypes.FETCH_PROVINCES_FULFILLED:
      console.log('prov payload', action.payload)
      return {
        ...state,
        pending: false,
        provinces: action.payload,
        isFetchCompleted: true,
      };

    case LocationActionsTypes.FETCH_CITIES:
      return {
        ...state,
        pending: true,
        isFetchCompleted: false,
      };

    case LocationActionsTypes.FETCH_CITIES_FULFILLED:
      console.log('cityes sulfilled', action.payload );
      return {
        ...state,
        pending: false,
        cities: action.payload,
        isFetchCompleted: true,
      };


    case LocationActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: false,
        error: true,
        data: action.payload
      };

    case LocationActionsTypes.CLEAR_DATA:
      return initialState;

    case LocationActionsTypes.SAVE_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.payload]
      };

    default:
      return state;
  }
}
