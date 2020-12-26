import { Component, OnInit } from '@angular/core';

import { ViewportScroller } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { DonateComponent } from '../donate/donate.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public onClick(elementId: string): void { 
    
    this.viewportScroller.scrollToAnchor(elementId);
   
}
openDialog() {
  console.log("called");
  const dialogRef = this.dialog.open(DonateComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}



}
