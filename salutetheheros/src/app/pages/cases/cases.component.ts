import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DonateComponent } from '../donate/donate.component';
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    console.log("called");
    const dialogRef = this.dialog.open(DonateComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
