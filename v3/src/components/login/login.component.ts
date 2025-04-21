import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'sp-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  @Input() header: string = "Login"
  @Output() newLoginEvent = new EventEmitter<string>();
  
  loginForm: FormGroup = new FormGroup({
    'login': new FormControl('Tebogo', Validators.required),
    'password': new FormControl('069pw#2010', Validators.required)
  });
  hide:boolean=true;
  submitted = false;

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    alert(JSON.stringify(this.loginForm!.value));
    this.newLoginEvent.emit(JSON.stringify(this.loginForm!.value));
  }
}
