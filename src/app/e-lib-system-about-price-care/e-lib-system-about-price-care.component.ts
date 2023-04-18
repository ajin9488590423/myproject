import { Component, OnInit } from '@angular/core';
import { price } from '../Model/price';
@Component({
  selector: 'app-e-lib-system-about-price-care',
  templateUrl: './e-lib-system-about-price-care.component.html',
  styleUrls: ['./e-lib-system-about-price-care.component.css']
})
export class ELibSystemAboutPriceCareComponent implements OnInit {
  public priceList: price[] = [
    {
      bookid: 1,
      book: "Ponniyin Selvan",
      authorName: "kalki",
      userName: "Ajin",
      day: "10",
      latefee: 50,
      lendingfee: 500,
      totalPrice: 550
    },
    {
      bookid: 2,
      book: "Harry Potter",
      authorName: "Jk Rolling",
      userName: "Sajin",
      day: "5",
      latefee: 25,
      lendingfee: 250,
      totalPrice: 275
    },
    {
      bookid: 3,
      book: "John Wick",
      authorName: "Tom",
      userName: "Abin",
      day: "2",
      latefee: 10,
      lendingfee: 100,
      totalPrice: 110
    },
    {
      bookid: 4,
      book: "The Witcher",
      authorName: "Hentry cavil",
      userName: "Nishanth",
      day: "4",
      latefee: 20,
      lendingfee: 200,
      totalPrice: 220
    },
    {
      bookid: 5,
      book: "Cintrella",
      authorName: "hanks",
      userName: "Nishani",
      day: "1",
      latefee: 5,
      lendingfee: 50,
      totalPrice: 55
    },
    {
      bookid: 6,
      book: "TRAVEL WITH DORA",
      authorName: "Chutti tv",
      userName: "Riyan",
      day: "20",
      latefee: 100,
      lendingfee: 1000,
      totalPrice: 1100
    },
    {
      bookid: 7,
      book: "Game Of thrones",
      authorName: "HBO",
      userName: "Lasi",
      day: "1",
      latefee: 5,
      lendingfee: 50,
      totalPrice: 55
    }
  ]
  constructor() { }
  ngOnInit(): void {

  }

}
