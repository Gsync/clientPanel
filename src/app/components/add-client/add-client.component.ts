import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';

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
  disableBalanceOnAdd: boolean = this.settingsService.settings
    .disableBalanceOnAdd;

  @ViewChild('clientForm')
  form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {}

  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    if (valid) {
      // add new client
      this.clientService.addClient(value);
      // show message
      // redirect to dashboard
      this.flashMessage.show('Success: Data is added successfully.', {
        cssClass: 'alert-success'
      });
      this.router.navigate(['/']);
    } else {
      console.log('error: Data is invalid!!!!');
      this.flashMessage.show('Error: Data is invalid!!!', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
    }
  }
}
