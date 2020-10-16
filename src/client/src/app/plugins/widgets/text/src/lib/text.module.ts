import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TextComponent } from './text.component';



@NgModule({
  declarations: [TextComponent],
  imports: [
    ButtonModule
  ],
  exports: [TextComponent]
})
export class TextModule { }
