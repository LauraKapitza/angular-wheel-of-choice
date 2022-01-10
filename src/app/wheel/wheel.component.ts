import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit {

  @Input() choices: any;

  constructor(  ) { }

  rotateFunction() {
    console.warn('Spin spin spin')
  }

  ngOnInit(): void {
  }

}
