import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    balance: 0
  };
  disableBalanceOnAdd = true;

  constructor() {}

  ngOnInit() {}
}
