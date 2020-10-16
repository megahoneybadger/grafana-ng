import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget',
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
