import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Output() e = new EventEmitter<FormGroup>();

  addressForm = this._formBuilder.group({
    street : ['', [Validators.required]],
    locality : ['', [Validators.required]],
    city : ['', [Validators.required]],
    state : ['', [Validators.required]],
    country : ['', [Validators.required]],
    pincode : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
  })
  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.addressForm.valueChanges.subscribe((t) => {
        this.addressFormEmitter();
    })
  }

  addressFormEmitter() {
      this.e.emit(this.addressForm);
  }

}
