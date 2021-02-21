import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New status: '+ status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    // DO NOT USE SERVICE LIKE THIS ON ANGULAR
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
