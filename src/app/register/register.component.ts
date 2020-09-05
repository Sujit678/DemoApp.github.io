import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { State } from '../register/register';
import { HttpClient } from '@angular/common/http';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Interest {
  name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = 'Register';
  urls = './assets/photo.png';

  url: 'http://localhost:4200/profile';

  state: State[] = [
    {id: 1, name: 'Maharashtra'},
    {id: 2, name: 'Goa'},
    {id: 3, name: 'Rajasthan'},
    {id: 4, name: 'Haryana'},
    {id: 5, name: 'Bihar'},
    {id: 6, name: 'Gujarat'},
    {id: 7, name: 'Assam'},
    {id: 8, name: 'Andhra Pradesh'},
    {id: 9, name: 'Arunachal Pradesh'},
    {id: 10, name: 'Chhattisgarh '},
    {id: 11, name: 'Himachal Pradesh'},
    {id: 12, name: 'Jammu and Kashmir'}
  ];

  country: State[] = [
    {id: 1, name: 'India'},
    {id: 2, name: 'Russia'},
    {id: 3, name: 'Canada'},
    {id: 4, name: 'China'},
    {id: 5, name: 'United States'},
    {id: 6, name: 'Brazil'},
    {id: 7, name: 'Australia'},
    {id: 8, name: 'Argentina'},
    {id: 9, name: 'Kazakhstan'},
    {id: 10, name: 'Sudan '},
    {id: 11, name: 'Mexico'},
    {id: 12, name: 'Indonesia'}
  ];

  address: State[] = [
    {id: 1, name: 'Home'},
    {id: 2, name: 'Company'}
  ];

  registrationForm = this.fb.group({
    photo: [''],
    file: [''],
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.maxLength(20)]],
    lastName: [''],
    email: [''],
    contactNo: [''],
    age: [''],
    state: [''],
    country: [''],
    address: [''],
    tags: ['']
  });

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  interests: Interest[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.interests.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(interest: Interest): void {
    const index = this.interests.indexOf(interest);

    if (index >= 0) {
      this.interests.splice(index, 1);
    }
  }

  get firstName() {
    return this.registrationForm.get('firstName') as FormControl;
  }

  close(){
    this.dialog.closeAll();
  }

   public onSubmit(): void {
    console.log(this.registrationForm.value);
  }

  uploadPhoto(e){
    if (e.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.urls = event.target.result;
      };
    }
  }

  constructor(public fb: FormBuilder,
              public dialog: MatDialog,
              private http: HttpClient) { }

  ngOnInit(): void { }
}
