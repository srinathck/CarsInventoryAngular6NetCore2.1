import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from './../car.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html'
})
export class DeleteComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() id: number;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;
  constructor(private activeModal: NgbActiveModal, private carService: CarService) { }

  ngOnInit() {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept(id) {
    this.carService.deleteCar(id).subscribe(res => { this.activeModal.close(true); location.reload(); });
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
