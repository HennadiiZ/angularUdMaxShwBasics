import { OnInit, Component } from "@angular/core";

@Component({
  selector: 'warn-alert',
  template: `<div>{{message}}</div>`,
  styles: [`
    div { color: orange }
  `]
})

export class WarningAlertComponent implements OnInit {

  message: string = 'Warning'
  ngOnInit(): void {}
}
