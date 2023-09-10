import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Food } from 'src/app/shared/models/food';
@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
  foods:Food[]=[];
  constructor( private foodservice:ServicesService) { }

  ngOnInit(): void {
    this.foods=this.foodservice.getAll();
  }

}
