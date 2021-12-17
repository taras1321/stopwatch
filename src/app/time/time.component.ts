import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  @Input() seconds: number
  @Input() minutes: number
  @Input() hours: number
}
