import { Injectable } from '@angular/core';
import { Montre } from '../shareds/model/montre';

@Injectable({
  providedIn: 'root'
})
export class MontreService {

  constructor() { }
  getMontreById(id:number):Montre {
    return this.get().find(montre => montre.id ==id) !;
  }

 


  get():Montre[]{
    return[
      {
        id:1,
        name:'montrehomme',
        price:300,
        stars:4.0,
        imageUrl:'../../../assets/img29.jpg',
       },
       {
        id:2,
        name:'montrehomme',
        price:100,
        stars:4.0,
        imageUrl:'../../../assets/img23.jpg',
       },
       {
        id:3,
        name:'montrehomme',
        price:500,
        stars:4.0,
        imageUrl:'../../../assets/img24.jpg',
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
       {
        id:6,
        name:'montrehomme',
        price:400,
        stars:4.0,
        imageUrl:'../../../assets/img31.jpg',
       },
       {
        id:7,
        name:'montrehomme',
        price:300,
        stars:4.0,
        imageUrl:'../../../assets/img28.jpg',
       },
       {
        id:8,
        name:'montrehomme',
        price:600,
        stars:4.0,
        imageUrl:'../../../assets/img33.jpg',
       },
       {
        id:9,
        name:'montrehomme',
        price:600,
        stars:4.0,
        imageUrl:'../../../assets/img32.jpg',
       },
       {
        id:10,
        name:'montrehomme',
        price:600,
        stars:4.0,
        imageUrl:'../../../assets/img34.jpg',
       }
       
    ]
    
    
  }
 
}
