import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[
    `input.ng-invalid{ border-left:5px solid red }
    input.ng-valid{ border-left:5px solid green }
    `
  ]
})
export class AppComponent {
  title = 'app';
  myName="OmSriSaiRam";

  OnSubmit(value:any)
  {
    console.log(value);
  }
}
