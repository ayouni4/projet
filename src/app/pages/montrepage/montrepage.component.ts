import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-montrepage',
  templateUrl: './montrepage.component.html',
  styleUrls: ['./montrepage.component.css']
})
export class MontrepageComponent implements OnInit {
  food !:Food;

  constructor(  private activatedroute:ActivatedRoute,
     private foodservice:ServicesService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) =>{
      if(params['id'])
      this.food = this.foodservice.getFoodById(params['id'])
    })
  }

}
