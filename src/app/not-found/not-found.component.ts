import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `
    <div class="container text-center">
      <h1 style="font-size:128px">ru-admin</h1>
      <p>Página não encontrada :(</p>
    </div>
  `
})
export class PageNotFoundComponent {
  constructor(private titleService: Title) {
    //Mudar o título do documento
    titleService.setTitle('ru-admin | 404');
  }
}