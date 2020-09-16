import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'ed-progress',
  template: `
    <div class="ed-flex muted" *ngIf="show">
      <i class="fa fa-spinner fa-spin"></i>
      <div class="ml-1">{{message}}</div>
    </div>
  `,
})
export class ProgressComponent implements OnInit {

  @Input() message: string = "loading...";
  @Input() showAtOnce: boolean = false;
  show: boolean = false;

  ngOnInit(){
    if( this.showAtOnce ){
      this.show = true
    } else {
      setTimeout( () => this.show = true, 500 );
    }
  }
}