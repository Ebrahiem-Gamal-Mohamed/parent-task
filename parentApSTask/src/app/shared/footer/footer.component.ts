import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  current_year_counter: any;

  constructor() { }

  ngOnInit() {
    this.current_year_counter = new Date().getFullYear();
  }

}
