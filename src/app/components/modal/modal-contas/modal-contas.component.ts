import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-contas',
  templateUrl: './modal-contas.component.html',
  styleUrls: ['./modal-contas.component.css']
})
export class ModalContasComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
