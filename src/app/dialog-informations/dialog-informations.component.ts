import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-informations',
  templateUrl: './dialog-informations.component.html',
  styleUrls: ['./dialog-informations.component.scss']
})
export class DialogInformationsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogInformationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit() {
    console.log(this.data.place)
  }

}
