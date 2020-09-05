import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { State } from '../register/register';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {

  location: State[] = [
    {id: 1, name: 'Thane'},
    {id: 2, name: 'Indore'},
    {id: 3, name: 'Mumbai'},
    {id: 4, name: 'Navi Mumbai'},
    {id: 5, name: 'Kalyan'},
    {id: 6, name: 'Nashik'},
    {id: 7, name: 'Noida'},
    {id: 8, name: 'Ratnagiri'},
    {id: 9, name: 'Pune'},
    {id: 10, name: 'Satara'},
    {id: 11, name: 'Aurangabad'},
    {id: 12, name: 'Mumbai Subarban'}
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openForm(){
    this.dialog.open(RegisterComponent);
  }

}
