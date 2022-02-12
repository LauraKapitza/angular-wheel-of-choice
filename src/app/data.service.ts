import { Injectable } from '@angular/core';
import Chart from 'chart.js/auto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  choices : any[] = [];
  wheelChart : any = {};

  constructor(
  ) { }

  addChoice(input: any) {
    this.choices.push(input);
  }

  countChoices() {
    let count = 0;
    this.choices.forEach(choice => count++);
    return count;
  }

  getChoices() {
    console.log('getChoices method called')
    return this.choices;
  }

  removeChoice(input: any) {
    let index = this.choices.indexOf(input)
    this.choices.splice(index, 1)
  }

  clearChoices() {
    this.choices = [];
    return this.choices
  }

  createWheel() {
    const ctx: any = document.getElementById('myChart');
    this.wheelChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.choices,
            datasets: [{
                label: '# of Choices',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          }
        }
    });
  }

  updateWheel() {
    const wheelData = this.wheelChart.data;
    wheelData.labels = this.choices;
    wheelData.datasets.forEach((dataset: any) => {
      dataset.data.push(1);
    });
    this.wheelChart.update();
  }

}
