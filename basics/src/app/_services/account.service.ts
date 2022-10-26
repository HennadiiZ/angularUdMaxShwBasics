import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string): void {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }


  updateAccount(id: number, status: string): void {
    this.accounts[id].status = status;
  }
}
