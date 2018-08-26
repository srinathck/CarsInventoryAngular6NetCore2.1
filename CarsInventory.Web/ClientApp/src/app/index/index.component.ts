import { Component, OnInit } from '@angular/core';
import { CarService } from './../car.service';
import { Car } from './../car';
import { DeleteService } from './../delete/delete.service';
import { DetailService } from './../detail/detail.service';
import { CreateService } from './../create/create.service';
import { EditService } from '../edit/edit.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  public cars: any;

  constructor(public carservice: CarService, private deleteService: DeleteService, private detailService: DetailService, private createService: CreateService, private editService: EditService) {
    this.carservice.getCars().subscribe(res => this.cars = res);
  }


  ngOnInit() {
  }

  detail(id: number): void {
    this.openCarDetail(id);
  }

  edit(car: Car): void {
    this.openCarEdit(car);
  }

  delete(id: number): void {
    this.openConfirmationDialog(id);
  }

  addCar(): void {
    this.openAddCar();
  }

  public openConfirmationDialog(id: number) {
    this.deleteService.confirm('Please confirm..', 'Do you really want to delete Car Id: ' + id + '?', id)
      .then()
      .catch(() => { });
  }
  public openCarDetail(id: number) {
    this.detailService.confirm('Car Detail', id)
      .then()
      .catch(() => { });
  }

  public openAddCar() {
    this.createService.confirm('Add New Car')
      .then()
      .catch(() => { });
  }
  public openCarEdit(car: Car) {
    this.editService.confirm('Edit Car Details', JSON.stringify(car))
      .then()
      .catch(() => { });
  }
}
