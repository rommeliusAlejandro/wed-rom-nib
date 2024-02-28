import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('counterComponent') counterComponent: ElementRef;
  @ViewChild('songPlayer') songPlayerComponent: ElementRef;

  loading: boolean = true;
  bootTimer: any;

  constructor() {
  }

  ngOnInit(): void {

    this.bootTimer = setInterval(() => {
      this.loading = false;
      this.songPlayerComponent.nativeElement.play();
      this.songPlayerComponent.nativeElement.muted = false;
    }, 1500);
  }

  scrollToCounter() {
    if (this.counterComponent) {
      this.counterComponent.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

}
