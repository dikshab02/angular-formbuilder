import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from './form-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private formService: FormService) {}
  title = 'my-formapp';
  errMsgArr: string[] = [];
  errMsgAddArr: string[] = [];
  errMsgTempAddArr: string[] = [];
  names: any = {
    firstName: 'First Name',
    secondName: 'Second Name',
    birthday: 'Birthday',
    email: 'Email',
    phone: 'Phone Number'
  }

  address: any = {
    street: 'Street',
    locality: 'Locality',
    city: 'City',
    state: 'State',
    country: 'Country',
    pincode: 'Pin code'
  }

  onSubmit() {
    this.formService.submit.next(undefined);
  }

  onBasicInfoChange(data: FormGroup) {
    this.errMsgArr = [];
    Object.keys(data.controls).forEach((t) => {
      const errors = data.controls[t].errors;
      if (errors) {
        let name = this.names[t];
        if (errors['required']) {
          this.errMsgArr.push(name + ' is required');
        } else if (errors['email']) {
          this.errMsgArr.push(name + ' should be in proper format');
        } else if (errors['minlength'] || errors['maxlength']) {
          this.errMsgArr.push(name + ' should be of 10 digits');
        }
      }
    });
  }
  onPermanentAddressChange(permanent: FormGroup) {
  //  console.log('data -> ', p);
    this.errMsgAddArr = [];
    Object.keys(permanent.controls).forEach((a) => {
      const addErrors = permanent.controls[a].errors;
      if(addErrors){
        let address = this.address[a];
        if (addErrors['required'])
        {
          this.errMsgAddArr.push(address + ' is required');
        }
        else if(addErrors['minlength'] || addErrors['maxlength'])
        {
          this.errMsgAddArr.push(address + ' should be of 6 digits')
        }
      }
    })
  }
  onTemporaryAddressChange(temp: any) {
  //  console.log('data -> ', t);
  this.errMsgTempAddArr = [];
  Object.keys(temp.controls).forEach((b) => {
    const addTempErrors = temp.controls[b].errors;
    if(addTempErrors){
      let address = this.address[b];
      if (addTempErrors['required'])
      {
        this.errMsgTempAddArr.push(address + ' is required');
      }
      else if(addTempErrors['minlength'] || addTempErrors['maxlength'])
      {
        this.errMsgTempAddArr.push(address + ' should be of 6 digits')
      }
    }
  })
  }

}
