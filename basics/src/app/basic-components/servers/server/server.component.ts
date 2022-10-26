import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../../_services/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  // server!: {id: number, name: string, status: string};
  server!: any;

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
