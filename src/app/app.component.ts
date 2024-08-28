import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const element = this.el.nativeElement.querySelector('.content');
    if (element) {
      this.renderer.addClass(element, 'fade-in');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  title = 'jfinancao-web';
}
