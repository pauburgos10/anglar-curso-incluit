import { Client } from './../../client-list/models/client/client.model';
import { ILocation } from './../store/location.reducer';
import { LocationService } from './../services/location.service';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromActionsClients from '../store/location.actions';
import * as fromSelectorClients from '../store/location.selectors';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  clientForm: FormGroup;
  provinces: [] = [];
  cities: [] = [];
  provinceId: number;
  submitted = false;

  loadProvincesSubs: Subscription;
  loadCitiesSubs: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<ILocation>,
    private locationService: LocationService
  ) { }

  buildForm() {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      phone: ['', [Validators.required, Validators.pattern('^\\d{3}-\\d{3}-\\d{4}$')]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      province: ['', Validators.required],
      city:'',
      zipCode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],

      // paso 13        
    });
  }

  fetchProvinces() {
    this.store.dispatch(
      new fromActionsClients.FetchProvinces()
    );
  }

  setProvinces() {
    this.loadProvincesSubs = this.store.pipe(select(fromSelectorClients.selectDataProvinces))
        .pipe(filter(val => !!val))
        .subscribe((provinces: any) => {
          console.log('set Province', provinces);
            this.provinces = provinces;
        });
  }

  fetchCities(province) {
    this.provinceId = province.id;
    this.store.dispatch(
        new fromActionsClients.FetchCities(this.provinceId),
    );
    this.setCities();
  }

  setCities() {
    this.loadCitiesSubs = this.store
      .pipe(select(fromSelectorClients.selectDataCities))
      .pipe(filter(val => !!val))
      .subscribe((data: any) => {        
          this.cities = data.municipios;
      });
  }

  ngOnInit() {
    this.buildForm();
    this.fetchProvinces();
    this.setProvinces();
    this.subscribeChanges();
  }

  subscribeChanges(): void {
    this.clientForm.get('province').valueChanges.subscribe(val => {
      console.log(val);
      this.fetchCities(val);
    });
  }

  saveClient() {
    this.submitted = true;
    console.log('form data', );
    // stop here if form is invalid
    if (this.clientForm.invalid) {
        return;
    }
    console.log('form data', this.clientForm.value);
    const newClient: Client = new Client(this.clientForm.value);
    newClient.province = this.clientForm.value.province.nombre;
    this.store.dispatch(
      new fromActionsClients.SaveClient(newClient)
    );
  }

  get f() { return this.clientForm.controls; }

}
