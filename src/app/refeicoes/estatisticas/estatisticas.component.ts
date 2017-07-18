import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './estatisticas.component.html'
})

export class EstatisticasComponent {

  constructor(private titleService: Title) {
    //Mudar o título do documento
    titleService.setTitle('ru-admin | Estatísticas');
  }
}