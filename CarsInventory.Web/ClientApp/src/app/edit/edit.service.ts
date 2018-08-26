import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit.component';

@Injectable()
export class EditService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    title: string,
    car: string,
    close: string = 'Close',
    dialogSize: 'sm' | 'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(EditComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.car = car;
    modalRef.componentInstance.close = close;

    return modalRef.result;
  }
}
