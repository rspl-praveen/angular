import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcontent',
  templateUrl: './subcontent.component.html',
  styleUrls: ['./subcontent.component.css']
})
export class SubcontentComponent implements OnInit {
  public id:number=0;
  constructor(
    private route: ActivatedRoute,) { }

  ngOnInit() {


    this.id = this.route.snapshot.paramMap.get('id');
  }

}
