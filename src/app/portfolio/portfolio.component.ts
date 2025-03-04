import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  words = ["Hi I'am Jensen", 'a web coder.'];
  speed = 100;
  skip_delay = 25;

  constructor() {}

  ngOnInit(): void {}
}