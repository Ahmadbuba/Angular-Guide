import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  turner = true;
  page(recieve: boolean) {
    recieve? this.turner = true: this.turner = false;
  }

}
