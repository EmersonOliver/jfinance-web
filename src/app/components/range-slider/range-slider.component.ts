import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() min: number = 0;
  @Input() max: number = 100;
  
  minValue: number = this.min;
  maxValue: number = this.max;

  updateMinValue() {
    if (this.minValue > this.maxValue - 1) {
      this.minValue = this.maxValue - 1;
    }
  }

  updateMaxValue() {
    if (this.maxValue < this.minValue + 1) {
      this.maxValue = this.minValue + 1;
    }
  }

}
