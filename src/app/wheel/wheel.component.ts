import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../data.service';


@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit {

  wheel : any = {};

  constructor(
    private dataService: DataService
  ) { }

  // updateChart() {
  //   const wheelData = this.wheelChart.data;
  //   wheelData.labels = this.choices;
  //   wheelData.datasets.forEach((dataset: any) => {
  //     dataset.data.push(1);
  //   });
  //  this.wheelChart.update();
  // }

  rotateWheel() {
    console.warn('Spin spin spin')
  }

  ngOnInit(): void {
    this.wheel = this.dataService.createWheel();
  }

}
