import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-e-lib-system-about-addbook',
  templateUrl: './e-lib-system-about-addbook.component.html',
  styleUrls: ['./e-lib-system-about-addbook.component.css']
})
export class ELibSystemAboutAddbookComponent implements OnInit {
  public PriceForm = new FormGroup({
    bookid: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
    bookTitle: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z]+$"),Validators.maxLength(50)]),
    bookdesc: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$"),Validators.maxLength(50)]),
    authorName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$"),Validators.maxLength(50)]),
    avaliable: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")])

  })
  constructor(){
  }
  ngOnInit(): void {
    
  }
  successAlert(){
    Swal.fire("Thank You...",'You Added Succeesfully','success')
  
  }
  Add(){
    console.log(this. PriceForm.value);
  }
  get bookid() {
    return this. PriceForm.get('bookid');
  }
  get bookTitle() {
    return this. PriceForm.get('bookTitle');
  }
  get bookdesc() {
    return this. PriceForm.get('bookdesc');
  }
  get authorName() {
    return this. PriceForm.get('authorName');
  }
  get avaliable() {
    return this. PriceForm.get('avaliable');
  }
}