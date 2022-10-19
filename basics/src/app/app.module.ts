import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}




// 18. Creating a New Component

// 19. Understanding the Role of AppModule and Component Declaration
// 20. Using Custom Components
// 21. Creating Components with the CLI & Nesting Components
// 22. Working with Component Templates

// A Basic Project Setup using Bootstrap for Styling

// 24. Fully Understanding the Component Selector
// 25. [OPTIONAL] Assignment Solution
