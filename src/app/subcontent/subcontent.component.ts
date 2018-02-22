import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-subcontent',
  templateUrl: './subcontent.component.html',
  styleUrls: ['./subcontent.component.css']
})
export class SubcontentComponent implements OnInit {
  data = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient ) { }

  ngOnInit() {

    this.http.get('/assets/data/data.json').subscribe( data => {
      this.data = data['array'];
    });

  }
}
