import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from './../car';
import { DetailComponent } from './detail.component';

@Injectable()
export class DetailService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    title: string,
    id: number,
    close: string = 'Close',
    dialogSize: 'sm' | 'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(DetailComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.close = close;

    return modalRef.result;
  }
}
