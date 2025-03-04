import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTypewriter]'
})
export class TypewriterDirective implements OnInit {
  @Input() words: string[] = [];
  @Input() speed: number = 100;
  @Input() skipDelay: number = 25;

  private i = 0;
  private offset = 0;
  private forwards = true;
  private skipCount = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startAnimation();
  }

  private startAnimation(): void {
    setInterval(() => {
      const len = this.words.length;
      if (this.forwards) {
        if (this.offset >= this.words[this.i].length) {
          this.skipCount++;
          if (this.skipCount === this.skipDelay) {
            this.forwards = false;
            this.skipCount = 0;
          }
        }
      } else {
        if (this.offset === 0) {
          this.forwards = true;
          this.i++;
          this.offset = 0;
          if (this.i >= len) {
            this.i = 0;
          }
        }
      }

      const part = this.words[this.i].substr(0, this.offset);
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', part);

      if (this.skipCount === 0) {
        this.forwards ? this.offset++ : this.offset--;
      }
    }, this.speed);
  }
}