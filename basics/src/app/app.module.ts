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

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // localhost:4200/
  { path: 'servers', component: ServersComponent }, // localhost:4200/servers
  { path: 'servers/:id/edit', component: EditServerComponent }, // localhost:4200/servers/1/edit


  { path: 'users', component: UsersComponent }, // localhost:4200/users
  // { path: 'users/1', component: UserComponent } // localhost:4200/users/user-id
  // { path: 'users/2', component: UserComponent } // localhost:4200/users/user-id
  // { path: 'users/3', component: UserComponent } // localhost:4200/users/user-id

  // { path: 'users/:id', component: UserComponent } // localhost:4200/users/user-id

  { path: 'users/:id/:name', component: UserComponent } // localhost:4200/users/id/name
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
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

// 38. Retrieving Query Parameters and Fragments
