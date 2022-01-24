import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  choices : any[] = [];
  frequencies : any[] = [1]

  constructor() { }

  addChoice(input: any) {
    this.choices.push(input)
  }

  getChoices() {
    return this.choices
  }

  removeChoice(input: any) {
    let index = this.choices.indexOf(input)
    this.choices.splice(index, 1)
  }

  clearChoices() {
    this.choices = [];
    return this.choices
  }

  getFrequencies() {
    return this.frequencies
  }

  updateFrequencies() {
    this.choices.forEach(choice => {
      this.frequencies.push(1)
    })
  }

  updateChart(chart: any) {
    chart.data.datasets.data = this.frequencies;
    chart.update()
  }

}
