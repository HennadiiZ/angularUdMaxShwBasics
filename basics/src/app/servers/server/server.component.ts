import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // server: {id: number, name: string, status: string};
  server: any;

  // constructor(
  //   private serversService: ServersService
  // ) { }

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);

    this.route.params.subscribe(
      (params: Params) => {
        // console.log(params);
        // console.log(params['id']);
        this.server = this.serversService.getServer(+params['id']);
      }
    )
  }

}
