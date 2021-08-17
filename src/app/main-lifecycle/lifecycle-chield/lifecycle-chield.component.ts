import { SimpleChanges } from '@angular/core';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

export interface LifeCycleEvent{
  id: number;
  name:string;
  color:string;
}

@Component({
  selector: 'app-lifecycle-chield',
  templateUrl: './lifecycle-chield.component.html',
  styleUrls: ['./lifecycle-chield.component.css']
})
export class LifecycleChieldComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;
  colors: string[]= ["accent", "warn", "primary"];



  public events: LifeCycleEvent []=[];
  nextEventId: number = 0;

  constructor() {
    console.log(this.name + "- contructor");
    this.newEvent("contructor");
  }

  ngOnInit() {
    console.log(this.name + "- OnIniti");
    this.newEvent("OnIniti");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.name + "- ngOnChanges");
    this.newEvent("ngOnChanges");
    // for (let propName in changes) {
    //   console.log(propName)
    //   console.log(changes['name'])
    // }
  }

  ngAfterViewInit() {
    console.log(this.name + "- ngAfterViewInit");
    this.newEvent("ngAfterViewInit");
  }

  ngOnDestroy(){
    console.log(this.name + "- ngOnDestroy");
    this.newEvent("ngOnDestroy");
  }

  newEvent(name: string){
    let id = this.nextEventId++;
    this.events.push({
      id: id,
      color:this.colors[id%this.colors.length],
      name: name
    })
    setTimeout(()=> {
      let idx = this.events.findIndex((e) => e.id ===id)
      if(idx >=0)
      this.events.splice(idx, 1);
    }, 3000 + this.events.length*2000)
  }

}
