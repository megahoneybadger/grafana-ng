import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget',
  template: `
    <p>
      One more update: text panel will be here works!
    </p>
  `,
  styles: [
  ]
})
export class TextPanelComponent implements OnInit {

  constructor() { 
    console.log( 'created TextPanelComponent' )
  }

  ngOnInit(): void {
  }

}
