import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() closeSearch= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}
