import { Component, OnInit } from '@angular/core';

import { MontreService } from 'src/app/services/montre.service';
import { ActivatedRoute } from '@angular/router';
import { Montre } from 'src/app/shareds/model/montre';
@Component({
  selector: 'app-montrepagee',
  templateUrl: './montrepagee.component.html',
  styleUrls: ['./montrepagee.component.css']
})
export class MontrepageeComponent implements OnInit {
  montre !:Montre;
  constructor(private active:ActivatedRoute,
    private ameni:MontreService) { }

  ngOnInit(): void {
    this.active.params.subscribe((params) =>{
      if(params['id'])
      this.montre = this.ameni.getMontreById(params['id'])
    })
  }

}
