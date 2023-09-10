import { Component, OnInit } from '@angular/core';

import { PageService } from 'src/app/services/page.service';
import { Page } from 'src/app/sharede/page';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Page[]=[];
  constructor( private image:PageService) { }

  ngOnInit(): void {
    this.foods=this.image.img();
  }

}
