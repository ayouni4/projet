import { Component, OnInit } from '@angular/core';
import { MontreService } from 'src/app/services/montre.service';
import { Montre } from 'src/app/shareds/model/montre';
@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  foods:Montre[]=[];
  constructor(private ameni:MontreService) { }

  ngOnInit(): void {
    this.foods=this.ameni.get();
  }

}
