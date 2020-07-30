import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import {ApiService } from './service/Api.service'
import { Router } from'@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'myapp';

  myform:FormGroup
  obj = {
	  email:'',
	  password:''
  }

  constructor(private fb:FormBuilder, public api:ApiService, public router:Router){
	
  }

  ngOnInit(){
	  this.myform = this.fb.group({
		email:[''],
		password:['']
	})
  }

	// dashboard(){
	// 	if(this.myform.invalid == false){
	// 		
	// 	}
	// }  

  onSubmit(){
		console.log(this.obj)

	  if(this.myform.invalid){
		  console.log(this.myform)
		  return
	  }else{

		this.api.login(this.obj).subscribe(response=>{
			console.log(response)
			localStorage.setItem('token', response.token)
			this.router.navigate(['dashboard'])

		})
	  }
  }
}

