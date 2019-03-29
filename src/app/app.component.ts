import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //id dari DOM yang akan diinject oleh component root ini
  templateUrl: './app.component.html', //template yang menjadi view dari component
  styleUrls: ['./app.component.css'] //array css sebagai style component
})
export class AppComponent {
  title = 'Tour of Heroes';
}