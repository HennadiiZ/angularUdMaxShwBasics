import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessComponent } from './success/success.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
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


// 26. What is Databinding?
// 27. String Interpolation
// 28. Property Binding
// 29. Property Binding vs String Interpolation
// 30. Event Binding
// 31. Bindable Properties and Events
    // Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events
// 32. Passing and Using Data with Event Binding
// 33. Important: FormsModule is Required for Two-Way-Binding!
    // ngModel  directive
    // FormsModule  to the imports[]  array in the AppModule.
// 34. Two-Way-Databinding

// 35. Combining all Forms of Databinding
// 36. [OPTIONAL] Assignment Solution

// 37. Understanding Directives
// 38. Using ngIf to Output Data Conditionally
// 39. Enhancing ngIf with an Else Condition
// 40. Styling Elements Dynamically with ngStyle
// 41. Applying CSS Classes Dynamically with ngClass

// 42. Outputting Lists with ngFor
// Assignment 3: Practicing Directives
// 43. [OPTIONAL] Assignment Solution
// 44. Getting the Index when using ngFor


// Section 4: DEBUGGING



// 65. Splitting Apps into Components
// 66. Property & Event Binding Overview

// 67. Binding to Custom Properties
// 68. Assigning an Alias to Custom Properties
// 69. Binding to Custom Events
// 70. Assigning an Alias to Custom Events
// 71. Custom Property and Event Binding Summary

// 72. Understanding View Encapsulation
// 73. More on View Encapsulation

// 74. Using Local References in Templates

// 75. @ViewChild() in Angular 8+
// 76. Getting Access to the Template & DOM with @ViewChild

// 77. Projecting Content into Components with ng-content


// 78. Understanding the Component Lifecycle
// 79. Seeing Lifecycle Hooks in Action
// 80. Lifecycle Hooks and Template Access
