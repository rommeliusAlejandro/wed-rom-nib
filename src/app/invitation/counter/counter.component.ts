import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  days: number = 0;
  minutes: number = 0;
  hours: number = 0;
  seconds: number = 0;

  inviteeName: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap
      .subscribe((params) => {
        this.inviteeName = params['params']['fullName'];
      });
  }

  ngOnInit(): void {

    setInterval(() => {
      const targetDate = new Date("2024-04-06T16:00:00");
      const remainingTime = this.countDown(targetDate);

      this.days = remainingTime.days;
      this.hours = remainingTime.hours;
      this.minutes = remainingTime.minutes;
      this.seconds = remainingTime.seconds;
    }, 1000);
  }

  private countDown(targetDate: Date): any {
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds: number = Math.floor((difference % (1000 * 60)) / 1000);


    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

}
