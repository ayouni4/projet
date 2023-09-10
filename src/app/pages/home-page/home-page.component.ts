import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
import { Page } from 'src/app/sharede/page';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  page !:Page;
  constructor( private activee:ActivatedRoute,private a :PageService) { }

  ngOnInit(): void {
    this.activee.params.subscribe((params) =>{
      if(params['id'])
      this.page = this.a.getPageById(params['id'])
    })
  }

}
