import { Component } from '@angular/core';


@Component({
  selector: 'in-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'in';
  constructor () {
    // $('body').css('backgroundColor', 'red');
  }
}
