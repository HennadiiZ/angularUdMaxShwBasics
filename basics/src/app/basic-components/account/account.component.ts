import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { LoggingService } from '../../_services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accountService.updateAccount(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);

  }
}
