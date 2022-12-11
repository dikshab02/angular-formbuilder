import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  @Output() e = new EventEmitter<FormGroup>();

  basicForm = this._formBuilder.group({
    firstName : ['', [Validators.required]],
    secondName : ['', [Validators.required]],
    birthday : ['', [Validators.required]],
    email : ['', [Validators.required, Validators.email]],
    phone : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]]
  })

  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.basicForm.valueChanges.subscribe((temp)=> {
      this.basicFormEmitter();
    })
  }

  basicFormEmitter() {
    this.e.emit(this.basicForm)
  }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'Mandatory Field' :
  //   this.email.hasError('email') ? 'Not a valid email' : '';
  // }

}
