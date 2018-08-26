import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from './../car.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  myform: FormGroup;
  @Input() title: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;
  constructor(private activeModal: NgbActiveModal, private carService: CarService) { }

  ngOnInit() {
    this.myform = new FormGroup({
      id: new FormControl(),
      manufacturer: new FormControl(),
      make: new FormControl(),
      model: new FormControl(),
      year: new FormControl()
    });
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept(car: any) {
    this.carService.addCar(car);
    this.activeModal.close(true);
    location.reload();
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
