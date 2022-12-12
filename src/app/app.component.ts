import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngProject01';

  selectedMenu = 'mailing lists';

  addItem(newItem: string) {
    this.selectedMenu = newItem;
  }
}
