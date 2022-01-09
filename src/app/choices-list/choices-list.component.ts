import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ChoiceService } from '../choice.service';

@Component({
  selector: 'app-choices-list',
  templateUrl: './choices-list.component.html',
  styleUrls: ['./choices-list.component.css']
})
export class ChoicesListComponent {

  choices = this.choiceService.getChoices()

  choiceForm = this.formBuilder.group({
    description: '',
  })

  constructor(
    private choiceService: ChoiceService,
    private formBuilder: FormBuilder,
  ) {}

  removeChoice(choice: any) {
    this.choiceService.removeChoice(choice)
    console.warn('Your choice has been removed', choice.description)
  }

  onSubmit(): void {
    this.choiceService.addChoice(this.choiceForm.value)
    console.warn('Your choice has been added', this.choiceForm.value)
    this.choiceForm.reset()
  }

}
