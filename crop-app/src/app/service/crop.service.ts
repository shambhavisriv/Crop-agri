import { Injectable } from '@angular/core';
import { Crop } from '../model/crop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse {
  data: Crop[];
  status: boolean;
  message: string;
  cache_failed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CropService {
  private url = "https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json";

  constructor(private http: HttpClient) {

  }

  getCropData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.url).pipe(
      map(response => {
        response.data = response.data.sort((a, b) => a.id - b.id);
        return response;
      })
    );
  }
}