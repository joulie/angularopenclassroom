import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
 // appareilName: String = 'Machine à laver';
  appareilStatus: String = 'éteint';

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }
}
