import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers/servers.service";

@Injectable({providedIn: 'root'})
// export class ServerResolver implements Resolve<{id: number, name: string, status: string}> {
export class ServerResolver implements Resolve<any> {
  constructor(private serversService: ServersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any{
    return this.serversService.getServer(+route.params['id']);
  }
}
