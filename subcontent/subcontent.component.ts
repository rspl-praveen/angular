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
  param1: string;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient ) {
      this.route.params.subscribe( params => this.param1 = params.id );

     }

  ngOnInit() {

    this.http.get(`http://203.88.143.51:7058/api/api.php?name=${this.param1}`).subscribe( data => {
      console.log(data['status_message']);
      this.data = data['data'];
    });

  }
}
