import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  registerForm= this.formBuilder.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    address:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    dob:['',[Validators.required,Validators.pattern('[0-9]*')]],
    role:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]],


  })
  
  
  
    ngOnInit(): void {
    }
  
    register(){
  
     
  
        var uname=this.registerForm.value.uname
     alert("Register successfull")
     this.router.navigateByUrl('')
    
      }
  
  }
