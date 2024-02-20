import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  alertHidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public hideAlert(): void {
    this.alertHidden = true;
  }

}
