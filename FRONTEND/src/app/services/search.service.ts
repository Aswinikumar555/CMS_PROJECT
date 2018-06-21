import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http:Http,
    private authService:AuthService
  ) { }
  tpoSearch(depts,years){
    return this.http.get("http://localhost:3000/student/tposearch?depts="+depts+"&years="+years)
    .map(res => res.json());
  }

}
