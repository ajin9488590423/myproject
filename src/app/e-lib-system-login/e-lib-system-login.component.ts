import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { login } from '../Model/login ';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-e-lib-system-login',
  templateUrl: './e-lib-system-login.component.html',
  styleUrls: ['./e-lib-system-login.component.css']
})
export class ELibSystemLoginComponent implements OnInit {
  public navigate:boolean=true;
  public LoginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    password: new FormControl('', [Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%_])[a-zA-Z0-9!@#$%_]{10,}$")])
  })
  constructor(){
  }
  ngOnInit(): void {
    
  }
  exchange(){
    
  }
  successAlert(){
    this.navigate==true;
    Swal.fire("Thank You...",'You Login Succeesfully','success')
  
  }
  AddLogin(){
    console.log(this. LoginForm.value);
  }
  get userName() {
    return this. LoginForm.get('userName');
  }
  get password() {
    return this. LoginForm.get('password');
  }
}
