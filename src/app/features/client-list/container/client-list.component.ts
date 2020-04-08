import { Store, select } from '@ngrx/store';
import { Client } from './../models/client/client.model';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILocation } from '../../client-form/store/location.reducer';
import * as fromSelectorClients from '../../client-form/store/location.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  @Input() clients: Client[];

  loadClientsSubs: Subscription;

  constructor(private store: Store<ILocation>) { }

  ngOnInit() {
    this.loadClientsSubs = this.store
      .pipe(select(fromSelectorClients.selectDataClients))
      .pipe(filter(val => !!val))
      .subscribe((data: any) => {
        this.clients = data;
      });
  }

}
