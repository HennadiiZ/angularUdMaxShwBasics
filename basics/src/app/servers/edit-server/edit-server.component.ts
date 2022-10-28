import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  // server: {id: number, name: string, status: string};
  server: any;
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);

    // this.route.queryParams.subscribe();
    // this.route.fragment.subscribe();

    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;

      }
    );

    this.route.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    // console.log(this.route.snapshot.params['id']);

    // this.server = this.serversService.getServer(this.route.snapshot.params['id']);

    // this.route.params.subscribe(
    //   (params: Params) => {
    //     // console.log(params['id']);
    //     this.server = this.serversService.getServer(params['id']);
    //   }
    // )
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    // this.router.navigate(['servers', this.server.id]);
  }

}
