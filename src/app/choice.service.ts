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

  clearChoices() {
    this.choices = [];
    return this.choices
  }
}
