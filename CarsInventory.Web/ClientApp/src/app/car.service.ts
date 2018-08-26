import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {

  result: any;
  uri: string = 'http://localhost:56040/api/cars/';
  constructor(private http: HttpClient) {
  }

  //Post Call
  addCar(car: any) {
    const uri = this.uri;
    const obj = car;
    return this
      .http
      .post(uri, obj)
      .subscribe(res => { return res; },
        () => { console.log('error'); });
  }

  //Get All Call
  getCars() {
    const uri = this.uri;
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }

  //Get Call
  getCar(id: number): any {
    const uri = this.uri + id;
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }

  //Put Call
  editCar(car: any) {
    const uri = this.uri;
    return this
      .http
      .put(uri, car)
      .map(res => {
        return res;
      });
  }

  //Delete Call
  deleteCar(id: number) {
    const uri = this.uri + id;
    return this.http.delete(uri);
  }
}
