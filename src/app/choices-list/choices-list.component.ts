import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-choices-list',
  templateUrl: './choices-list.component.html',
  styleUrls: ['./choices-list.component.css']
})
export class ChoicesListComponent {

  choices = this.dataService.getChoices()

  choiceForm = this.formBuilder.group({
    description: '',
  })

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
  ) {}

  removeChoice(choice: any) {
    this.dataService.removeChoice(choice)
  }

  onSubmit(): void {
    this.dataService.addChoice(this.choiceForm.value);
    this.dataService.updateWheel();
    this.choiceForm.reset()
  }

}
