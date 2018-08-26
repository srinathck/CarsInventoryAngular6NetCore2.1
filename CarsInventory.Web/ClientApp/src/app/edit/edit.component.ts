import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from './../car';
import { CarService } from './../car.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  myform1: FormGroup;
  @Input() title: string;
  @Input() car: string;
  @Input() close: string;
  public carr: Car;
  constructor(private activeModal: NgbActiveModal, private carService: CarService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.carr = JSON.parse(this.car);
    this.myform1 = this.formBuilder.group({
      id: this.carr.id,
      manufacturer: this.carr.manufacturer,
      make: this.carr.make,
      model: this.carr.model,
      year: this.carr.year
    });

  }

  public decline() {
    this.activeModal.close(false);
  }

  public editCar(car: any) {
    this.carService.editCar(car).subscribe(res => { console.log(res); location.reload(); });
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
