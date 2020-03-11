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
    console.log(this.cElement);
    console.log(this.cElement.getElRef());
    const eref = this.cElement.getElRef();
    this.renderer.setStyle(eref,'background','olive');
    //this.renderer.setStyle(this.cElement,'background','olive');
  }

}