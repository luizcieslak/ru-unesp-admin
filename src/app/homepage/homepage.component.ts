import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private titleService: Title, private modalService: NgbModal) {
    //Mudar o título do documento
    titleService.setTitle('ru-admin | Página inicial');
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content);
  }

}
