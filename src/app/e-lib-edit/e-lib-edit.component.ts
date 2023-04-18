import { Component, OnInit } from '@angular/core';
import { price } from '../Model/price';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { search } from '../Model/searchbook';
import { ELibServiceService } from '../e-lib-service.service';
@Component({
  selector: 'app-e-lib-edit',
  templateUrl: './e-lib-edit.component.html',
  styleUrls: ['./e-lib-edit.component.css']
})
export class ELibEditComponent implements OnInit {
  public searchList: search[] = [];
public prod:any;
  public PriceForm = new FormGroup({
    bookid: new FormControl(0, [Validators.required]),
    bookTitle: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z]+$"),Validators.maxLength(10)]),
    bookdesc: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$"),Validators.maxLength(15)]),
    authorName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$"),Validators.maxLength(5)]),
    avaliable: new FormControl(0, [Validators.required])

  })
  constructor(private rou:ActivatedRoute,private elibsvc:ELibServiceService){
  }
  ngOnInit(): void {
    this.searchList=this.elibsvc.elibListData;
    this.rou.params.subscribe((val)=>
    {
      let prod=val['sId'];
      let filterSearch=this.searchList.filter(s=>s.serachid==prod)
      console.log(filterSearch);
      this.PriceForm.setValue({
       bookid:filterSearch[0].bookid,
        bookTitle:filterSearch[0].bookTitle,
        bookdesc:filterSearch[0].bookdesc,
        authorName:filterSearch[0].authorName,
         avaliable:filterSearch[0].avaliable
        
      })
    })
  }
  successAlert(){
    Swal.fire("Thank You...",'You Edit Succeesfully','success')
  
  }
  Edit(){
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