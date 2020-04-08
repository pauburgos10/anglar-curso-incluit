import { Client } from './../../models/client/client.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {

  @Input() client: Client;
  
  constructor() { }

  ngOnInit() {
    console.log('input client=',this.client)
  }

}
