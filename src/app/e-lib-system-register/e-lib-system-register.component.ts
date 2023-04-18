import { Component, OnInit } from '@angular/core';
import {} from 'ngx-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { register } from '../Model/register';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-e-lib-system-register',
  templateUrl: './e-lib-system-register.component.html',
  styleUrls: ['./e-lib-system-register.component.css']
})
export class ELibSystemRegisterComponent implements OnInit {
  public RegisterForm = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    lName: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z]+$")]),    
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%_])[a-zA-Z0-9!@#$%_]{10,}$")])
  })
constructor(){}
ngOnInit(): void {
  
}
ShowInfo(){
  Swal.fire("Email will be a username for login",'info')
}
successAlert(){
  Swal.fire("Thank You...",'You Register Succeesfully','success')

}
AddRegister(){
  console.log(this.RegisterForm.value);
}
get fName() {
  return this.RegisterForm.get('fName');
}
get lName() {
  return this.RegisterForm.get('lName');
}
get email() {
  return this.RegisterForm.get('email');
}
get password() {
  return this.RegisterForm.get('password');
}
}
