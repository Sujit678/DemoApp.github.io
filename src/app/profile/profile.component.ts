import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // profile = new RegisterComponent();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onclick(){
    document.getElementById('fileInput').click();
  }

  openEdit(){
    this.dialog.open(RegisterComponent);
  }

}
