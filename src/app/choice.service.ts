import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChoiceService {

  choices : any[] = [];

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
}
