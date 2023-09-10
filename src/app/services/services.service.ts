import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getFoodById(id:number):Food {
    return this.getAll().find(food => food.id ==id) !;
  }
 

  getAll():Food[]{
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
        name:'montrefemme',
        price:500,
        stars:4.0,
        imageUrl:'../../../assets/img10.jpg',
       },
       {
        id:3,
        name:'montrefemme',
        price:300,
        stars:4.0,
        imageUrl:'../../../assets/img13.jpg',
       },
       {
        id:4,
        name:'montrefemme',
        price:200,
        stars:4.0,
        imageUrl:'../../../assets/img14.jpg',
       },
       {
        id:5,
        name:'montrefemme',
        price:350,
        stars:4.0,
        imageUrl:'../../../assets/img15.jpg',
       },
       {
        id:6,
        name:'montrefemme',
        price:600,
        stars:4.0,
        imageUrl:'../../../assets/img16.jpg',
       },
       {
        id:7,
        name:'montrefemme',
        price:300,
        stars:4.0,
        imageUrl:'../../../assets/img19.jpg',
       },
       {
        id:8,
        name:'montrefemme',
        price:400,
        stars:4.0,
        imageUrl:'../../../assets/img18.jpg',
       },
       {
        id:9,
        name:'montrefemme',
        price:400,
        stars:4.0,
        imageUrl:'../../../assets/img20.jpg',
       },
       {
        id:10,
        name:'montrefemme',
        price:400,
        stars:4.0,
        imageUrl:'../../../assets/img21.jpg',
       }
       
    ]
    
    
  }

    
  
  
}
