import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loading: boolean = true;
  bootTimer: any;

  constructor() { }

  ngOnInit(): void {
    /*this.bootTimer = setInterval(()=> {
      this.loading = false;
    }, 1500);*/
  }

}
