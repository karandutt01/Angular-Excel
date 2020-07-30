import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpHandler } from '@angular/common/http';

@Injectable()

export class TokenInterceptor implements HttpInterceptor{

	constructor(){}

	intercept(req, next:HttpHandler){

		let token = localStorage.getItem('token')
		let tokenized = req.clone({
			headers: req.headers.set('Authorization', `Bearer ${token}`)
		})

		return next.handle(tokenized)
	}
}