import { NgtVector3 } from '@angular-three/core';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  words = ["Hi I'am Jensen", 'a web coder.']
  part: any
  i = 0
  offset = 0
  len = this.words.length
  forwards = true
  skip_count = 0
  skip_delay = 25
  speed = 100
  constructor() { }
a = () => {
  setInterval( () => {
    if (this.forwards) {
      if (this.offset >= this.words[this.i].length) {
        ++this.skip_count;
        if (this.skip_count == this.skip_delay) {
          this.forwards = false;
          this.skip_count = 0;
        }
      }
    }
    else {
      if (this.offset == 0) {
        this.forwards = true;
        this.i++;
        this.offset = 0;
        if (this.i >= this.len) {
          this.i = 0;
        }
      }
    }
    this.part = this.words[this.i].substr(0, this.offset);
    if (this.skip_count == 0) {
      if (this.forwards) {
        this.offset++;
      }
      else {
        this.offset--;
      }
    }
  },this.speed);
}
ngOnInit(): void {
      this.a()
}

}

