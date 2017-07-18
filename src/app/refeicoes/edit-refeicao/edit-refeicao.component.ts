import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-edit-refeicao',
  templateUrl: './edit-refeicao.component.html',
  styleUrls: ['./edit-refeicao.component.css']
})
export class EditRefeicaoComponent implements OnInit {

  constructor(private titleService: Title) {
    //Mudar o título do documento
    titleService.setTitle('ru-admin | Novo usuário');
   }

  ngOnInit() {
  }

}
