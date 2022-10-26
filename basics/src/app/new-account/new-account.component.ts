import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { LoggingService } from '../_services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert(status)
    );
  }

  ngOnInit(): void {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

}
