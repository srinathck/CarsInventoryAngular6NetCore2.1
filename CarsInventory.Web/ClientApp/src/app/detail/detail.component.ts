import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from './../car';
import { CarService } from './../car.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  @Input() title: string;
  @Input() id: number;
  @Input() close: string;
  public car: Car;
  constructor(private activeModal: NgbActiveModal, private carService: CarService) {
  }

  ngOnInit() {
    this.getCar(this.id);
  }

  public decline() {
    this.activeModal.close(false);
  }

  public getCar(id) {
    this.carService.getCar(id).subscribe(res => { return this.car = res; });
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
