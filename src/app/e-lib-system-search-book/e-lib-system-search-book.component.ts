import { Component, OnInit } from '@angular/core';
import { search } from '../Model/searchbook';
import { Router } from '@angular/router';
import { ELibServiceService } from '../e-lib-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-e-lib-system-search-book',
  templateUrl: './e-lib-system-search-book.component.html',
  styleUrls: ['./e-lib-system-search-book.component.css']
})
export class ELibSystemSearchBookComponent implements OnInit {
  public usrRol: string = "admin";
  public usrRol2: string = "admin";
  bookTitle: any;
  public searchList: search[]=[];
  
 
  constructor(private routing: Router, private elibsvc: ELibServiceService) {
  }
  ngOnInit(): void {
    this.searchList=this.elibsvc.elibListData;
    let usrRol = localStorage.getItem('userRole');
    console.log('userRole from localStorage', usrRol);
    let usrRol2 = localStorage.getItem('userRole2');
    console.log('userRole from localStorage', usrRol2);
   
  }
  editProd(serachid: any) {
    console.log(serachid);
    this.routing.navigateByUrl('/edit/' + serachid)
  }
  Search() {
    if (this.bookTitle == "") {
      this.ngOnInit();
    } else {
      this.searchList = this.searchList.filter(res => {
        return res.bookTitle?.toLocaleLowerCase().match(this.bookTitle.toLocaleLowerCase());
      })
    }
  }
  // delete(element: any) {
    
  //     this.searchList.forEach((value, index) => {
  //       if (value == element)
  //         this.searchList.splice(index, 1);
  //     })
  // }
  deletePopup(element:any){
    Swal.fire({
      title:'Are you sure want to delete?',
      text:'You will not able to recover this data',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'yes Delete it',
      cancelButtonText:'No keep it'
    }).then((result)=>{
      Swal.fire("Deleted","Your data has been deleted","success")

      // this.searchList.forEach((value, index) => {
      //   if (value==element){
      //     this.searchList.splice(index, 1);
      //   } 
         if(result.dismiss===Swal.DismissReason.cancel){
         
          Swal.fire("Cancelled","Your data is safe",'error')
        }
      // })
    })
  }
}
