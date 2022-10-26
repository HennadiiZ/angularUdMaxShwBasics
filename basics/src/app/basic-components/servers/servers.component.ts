import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/app/_services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>`,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  // serversArray = ['TestServer1', 'TestServer2'];

  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
