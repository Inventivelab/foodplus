import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }
  onSelect(feature: string){
    this.featureSelected.emit(feature)
  }

}
