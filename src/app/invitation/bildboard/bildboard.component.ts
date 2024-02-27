import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bildboard',
  templateUrl: './bildboard.component.html',
  styleUrls: ['./bildboard.component.scss']
})
export class BildboardComponent implements OnInit {

  @Output()
  goDown: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  goingDown() {
    return this.goDown.emit(true);
  }

}
