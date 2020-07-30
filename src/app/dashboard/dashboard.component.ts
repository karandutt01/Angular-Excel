import { Component, OnInit, ElementRef } from '@angular/core';
import { ApiService } from '../service/Api.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public api: ApiService, ) {

		this.api.userList({}).subscribe(response=>{
			console.log(response)

			this.arr = response.result

		})
		
  	}
	
   

   	arr = []
	ngOnInit(): void {

		
	}

  	exportToExcel() {
	  
		this.api.exportAsEcxelFile(this.arr)
	}	

}
