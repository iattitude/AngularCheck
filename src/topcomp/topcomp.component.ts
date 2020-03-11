import { Component, OnInit, ViewChild, AfterViewInit,Renderer2,ElementRef } from '@angular/core';
import { ChildindicatorDirective } from '../childindicator.directive'

@Component({
  selector: 'topcomp',
  templateUrl: './topcomp.component.html',
  styleUrls: ['./topcomp.component.css']
})
export class TopcompComponent implements OnInit,AfterViewInit {
  @ViewChild(ChildindicatorDirective,{static: false}) cElement:ChildindicatorDirective;
  
  constructor(private renderer:Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

  handle(event)
  {
    this.renderer.setStyle(this.cElement.getElRef().nativeElement,'background','rgb(130, 42, 202)'); //Solved
  }

  handleRev(event)
  {
    this.renderer.setStyle(this.cElement.getElRef().nativeElement,'background','rgb(21, 63, 17)'); //Solved
  }

}