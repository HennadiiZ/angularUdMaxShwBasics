import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { AuthGuard } from "./_services/auth-guard.service";
import { canDeactivateGuard } from "./_services/can-deactivate-guard.service";
import { ServerResolver } from "./_services/server-resolver.service";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
  //   { path: ':id', component: ServerComponent },
  //   { path: ':id/edit', component: EditServerComponent },
  // ]},
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
    { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateGuard] },
  ]},
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ]},
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Not Found!' } },
  // { path: '**', redirectTo: '/not-found'}
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
