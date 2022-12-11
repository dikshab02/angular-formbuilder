import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FormService } from '../form-service.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  @Output() e = new EventEmitter<FormGroup>();
  // @Input() getInfoFromParent: boolean = false;

  basicForm = this._formBuilder.group({
    firstName : ['', [Validators.required]],
    secondName : ['', [Validators.required]],
    birthday : ['', [Validators.required]],
    email : ['', [Validators.required, Validators.email]],
    phone : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]]
  })

  constructor(private _formBuilder : FormBuilder, private formService: FormService) { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("changes=->",changes)
  //   if(changes['getInfoFromParent'].currentValue)
  //   {
  //     this.basicFormEmitter();
  //   }
  // }

  ngOnInit(): void {
    // this.basicForm.valueChanges.subscribe((temp)=> {
    //   this.basicFormEmitter();
    // })
    this.formService.submit.subscribe((p)=>{
      this.basicFormEmitter();
    })
  }


  basicFormEmitter() {
    this.e.emit(this.basicForm)
  }

}
