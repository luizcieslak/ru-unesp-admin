import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private titleService: Title) {
    //Mudar o título do documento
    titleService.setTitle('ru-admin | Página inicial');
  }

  ngOnInit() {
  }

}
