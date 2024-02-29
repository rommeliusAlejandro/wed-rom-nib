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
  playingMusic: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.bootTimer = setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  playMusic() {
    this.songPlayerComponent.nativeElement.play();
    this.songPlayerComponent.nativeElement.muted = false;
    this.playingMusic = true;
  }

  muteMusic() {
    this.songPlayerComponent.nativeElement.pause();
    this.songPlayerComponent.nativeElement.muted = true;
    this.playingMusic = false;
  }

  scrollToCounter() {
    if (this.counterComponent) {
      this.counterComponent.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

}
