import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent },
  ]},
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ]},
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




// 125. Why do we need a Router?
// 126. Understanding the Example Project


// 127. Setting up and Loading Routes
// 128. Navigating with Router Links

// 129. Understanding Navigation Paths

// 130. Styling Active Router Links

// 131. Navigating Programmatically

// 132. Using Relative Paths in Programmatic Navigation

// 133. Passing Parameters to Routes

// 134. Fetching Route Parameters

// 135. Fetching Route Parameters Reactively

// 136. An Important Note about Route

// 137. Passing Query Parameters and Fragments

// 138. Retrieving Query Parameters and Fragments

// 139. Practicing and some Common Gotchas

// 140. Setting up Child (Nested) Routes

// 141. Using Query Parameters - Practice
// 142. Configuring the Handling of Query Parameters

// 143. Redirecting and Wildcard Routes

//----------------------------------------------------
    // this.route.params.subscribe()
    // this.route.queryParams.subscribe();
    // this.route.fragment.subscribe();



    // <a
    //   [routerLink]="['/servers', server.id]"
    //   [queryParams]="{allowEdit: server.id === 3 ? '1' : '0'}"
    //   [fragment]="'loading'"
    //   link {{ server.name }}
    // </a>
