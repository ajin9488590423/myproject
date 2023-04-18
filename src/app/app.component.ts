import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ajProject';
  public Addbook: string = "admin";
  public navigate:boolean=true;
  constructor(){}
  ngOnInit(): void {
  
  }
 
}
