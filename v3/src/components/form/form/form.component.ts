import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  laptopForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    
  }
  ngOnInit() {
  this.laptopForm = this.fb.group({
      initials: ['', Validators.required],
      fullNames: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
      businessUnit: ['', Validators.required],
      componentDescription: ['', Validators.required],
      organisationDescription: ['', Validators.required],
      postJobTitleDescription: ['', Validators.required]
    });
  }
  OnSubmit() {
    console.log(this.laptopForm.value);
  }

}
