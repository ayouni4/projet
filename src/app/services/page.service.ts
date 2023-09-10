import { Injectable } from '@angular/core';
import { Page } from '../sharede/page';
@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }
  getPageById(id:number):Page {
    return this.img().find(page => page.id ==id) !;
  }

  img():Page[]{
    return[
      {
        id:1,
        name:'montrefemme',
        price:100,
        stars:4.0,
        imageUrl:'../../../assets/img11.jpg',
       },
       {
        id:2,
        name:'montrehomme',
        price:100,
        stars:4.0,
        imageUrl:'../../../assets/img24.jpg',
       },
       {
        id:3,
        name:'montrefemme',
        price:400,
        stars:4.0,
        imageUrl:'../../../assets/img18.jpg',
       },
       {
        id:4,
        name:' montrehomme',
        price:340,
        stars:4.0,
        imageUrl:'../../../assets/img30.jpg',
       },
       {
        id:5,
        name:'montrehomme',
        price:250,
        stars:4.0,
        imageUrl:'../../../assets/img26.jpg',
       },
      
     
      
       
       
       
    ]
    
    
  }
}
