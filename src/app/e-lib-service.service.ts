import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { search } from './Model/searchbook';
@Injectable({
  providedIn: 'root'
})
export class ELibServiceService implements OnInit {
  
public elibListData:search[]=[
  {
    serachid: 1,
    name: 'Ajin',
    bookid:101,
    bookTitle: 'Ponniyinse',
    bookdesc:"ForCholaDynasty",
    authorName:"Kalki",
    avaliable:5,
    position: 'Developer',
    office: 'Chennai',
    age: 24,
    startDate: '20/06/1998',
    salary: 15700
   
    
  },
  {
    serachid: 2,
    name: 'Sajin',
    bookid:102,
    bookTitle: 'Harrypotter',
    bookdesc:"GoodMagicHowgwa",
    authorName:"JkRow",
    avaliable:5,
    position: 'Engineer',
    office: 'Mumbai',
    age: 21,
    startDate: '08/01/2002',
    salary: 20000
   
    
  },

  {
    serachid: 3,
    name: 'Abin',
    bookid:103,
    bookTitle: 'John Wick ',
    bookdesc:"A Gangster Man ",
    authorName:"keanu",
    avaliable:3,
    position: 'Distributer',
    office: 'Bangalore',
    age: 19,
    startDate: '23/06/2004',
    salary: 23700
    
   
  },

  {
    serachid: 4,
    name: 'Nishanth',
    bookid:104,
    bookTitle: 'Frozenonet',
    bookdesc:"A Snow Queen   ",
    authorName:"Disne",
    avaliable:10,
    position: 'Agriculture Eng',
    office: 'Kolkatha',
    age: 22,
    startDate: '16/05/2000',
    salary: 100000
   
  },

  {
    serachid: 5,
    name: 'Nishanthni',
    bookid:105,
    bookTitle: 'GameofThro',
    bookdesc:"TheSevenKingdom ",
    authorName:"David",
    avaliable:5,
    position: 'Bank Manager',
    office: 'Delhi',
    age: 18,
    startDate: '20/05/2006',
    salary: 50000
   
  },

  {
    serachid: 6,      
    name: 'lasiha',
    bookid:106,
    bookTitle: 'DoraAndBuc',
    bookdesc:"ExploreEveryWh",
    authorName:"Chutt",
    avaliable:15,
    position: 'Nurse',
    office: 'UsA',
    age: 17,
    startDate: '23/03/2005',
    salary: 162700
    
  },

  {
    serachid: 7,
    name: 'sharon',
    bookid:107,
    bookTitle: 'Biblebefor',
    bookdesc:"A God Words    ",
    authorName:"Jesus",
    avaliable:2,
    position: 'Police',
    office: 'india',
    age: 30,
    startDate: '29/08/1995',
    salary: 70000
   
  },

  {
    serachid: 8,
    name: 'riyan',
    bookid:108,
    bookTitle: 'TheWicther',
    bookdesc:"A Hunter Ghosts",
    authorName:"cavil",
    avaliable:4,
    position: 'Site Engg',
    office: 'Dubai',
    age: 35,
    startDate: '22/11/1990',
    salary: 150000,
   
  },

  {
    serachid: 9, 
    name: 'aiyana',
    bookid:109,
    bookTitle: 'MarvelComi',
    bookdesc:"Storyofsuperhe",
    authorName:"stanl",
    avaliable:1,
    position: 'Actress',
    office: 'kerala',
    age: 25,
    startDate: '10/04/1998',
    salary: 500000,
   
  },

  {
    serachid: 10,
    name: 'dismi',
    bookid:110,
    bookTitle: 'RomeoJulie',
    bookdesc:"ALoveStoryofbot",
    authorName:"Remoo",
    avaliable:7,
    position: 'Teacher',
    office: 'hyderabad',
    age: 28,
    startDate: '22/06/1999',
    salary: 25000
    
  }
]
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }
  
 
}
