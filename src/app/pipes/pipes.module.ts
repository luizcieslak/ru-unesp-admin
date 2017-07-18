import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pipes 
import { FormatPipe } from './format-pipe';
import { FromNowPipe } from './from-now-pipe';
import { KeysPipe } from './keys-pipe';
import { FormatDatePipe } from './format-date-pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FromNowPipe,
    FormatPipe,
    KeysPipe,
    FormatDatePipe
  ],
  exports:[
    FromNowPipe,
    FormatPipe,
    KeysPipe,
    FormatDatePipe
  ]
})

export class PipesModule { }
