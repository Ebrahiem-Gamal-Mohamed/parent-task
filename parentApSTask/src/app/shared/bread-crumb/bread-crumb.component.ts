import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  @Input() bread_title: string;
  @Input() bread_link: string;

  constructor() { }

  ngOnInit() {
  }

}
