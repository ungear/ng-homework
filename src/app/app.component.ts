import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit  {
  @ViewChild("appTitle", {static: false}) appTitle: ElementRef;

  constructor() { }

  ngAfterViewInit (): void {
    this.appTitle.nativeElement.innerText = "Angular Homework";
  }
}
