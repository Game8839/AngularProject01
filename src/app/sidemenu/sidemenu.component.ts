import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  menuSelections: string[] = [
    'mailing lists',
    'validation',
    'ingestion queues',
    'events',
    'news',
  ];

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  selectedMenu = 'mailing lists';

  handleClick(value: string) {
    this.selectedMenu = value;
    this.addNewItem(value);
  }

  isSelected(value: string): boolean {
    return value === this.selectedMenu;
  }
  constructor() {}
  ngOnInit(): void {}
}
