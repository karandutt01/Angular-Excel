import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import * as xlsx from 'xlsx';
import * as FileSaver from 'file-saver';  


@Injectable({
	providedIn:'root'
})

export class ApiService {

	constructor(public http:HttpClient){}

	url = 'http://13.233.27.106:8081/api'

	login(data):Observable<any>{
		return this.http.post(`${this.url}/user/login/admin`, data)
	}

	userList(data):Observable<any>{
		let page =1
		return this.http.post(`${this.url}/user/list?page=${page}`, data)
	}

	exportAsEcxelFile(arr){
		const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(arr)
		const workbook : xlsx.WorkBook = { Sheets:{data:ws}, SheetNames: ['data'] }
		const excelBuffer: any = xlsx.write(workbook, {bookType: 'xlsx', type: 'array' })
		this.saveAsExcelFile(excelBuffer);
	}

	saveAsExcelFile(buffer:any){
		const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'; 
		const data: Blob = new Blob([buffer], {type: EXCEL_TYPE}); 
		FileSaver.saveAs(data, + '_export_' + new  Date().getTime() + '.xlsx');
	}
}