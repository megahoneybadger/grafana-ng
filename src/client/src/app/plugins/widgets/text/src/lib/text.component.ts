import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-text',
  template: `
    <p>
      text works!
    </p>
  `,
  styles: [
  ]
})
export class TextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
