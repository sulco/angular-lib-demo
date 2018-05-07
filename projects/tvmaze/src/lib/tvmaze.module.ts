import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [PosterComponent],
  exports: [PosterComponent]
})
export class TvmazeModule {}
