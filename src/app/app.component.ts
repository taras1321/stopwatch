import { Component } from '@angular/core';
import { interval, Subscription, Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seconds = 0
  minutes = 0
  hours = 0

  is300msAfterClickWait = true

  sub: Subscription
  interval$: Observable<number>

  constructor() {
    this.interval$ = interval(1000)
  }

  unsubscribe() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

  start() {
    this.unsubscribe()

    this.sub = this.interval$.subscribe(() => {
      this.seconds += 1

      if (this.seconds === 60) {
        this.seconds = 0
        this.minutes += 1
      }

      if (this.minutes === 60) {
        this.seconds = 0
        this.minutes = 0
        this.hours += 1
      }
    })
  }

  stop() {
    this.unsubscribe()
    this.seconds = this.minutes = this.hours = 0
  }

  wait() {
    if (!this.is300msAfterClickWait) {
      this.unsubscribe()
    }

    this.is300msAfterClickWait = false

    setTimeout(() => {
      this.is300msAfterClickWait = true
    }, 300)
  }

  reset() {
    this.stop()
    this.start()
  }
}
