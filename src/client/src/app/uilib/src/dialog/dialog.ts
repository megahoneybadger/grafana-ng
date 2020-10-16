import { Component, Input, Output, EventEmitter, ViewChild,
  TemplateRef, ContentChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'ed-dialog-actions',
  template: "<ng-template #innerTemplate><ng-content></ng-content></ng-template>",
  encapsulation: ViewEncapsulation.None
})
export class DialogActionsComponent  {
  @ViewChild('innerTemplate') 
  public innerTemplate: TemplateRef<any>;
}

@Component({
  selector: 'ed-dialog',
  templateUrl: './dialog.html',
  
  styleUrls: [ 'dialog.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent {

  @Input() visible : boolean = false;
  @Output() visibleChange = new EventEmitter();
  @Output() close = new EventEmitter();
  @Input() closable: boolean = true;

  @Input() header: string;
  @Input() headerIcon: string;

  @ContentChild(DialogActionsComponent) actions: DialogActionsComponent;
  actionsTemplate: TemplateRef<any>;

  onHide(){
    this.visible = false;
    this.visibleChange.emit()
    this.close.emit();
  }

  ngAfterContentInit() {
    setTimeout( () => this.actionsTemplate = this.actions?.innerTemplate, 0 )
  }
}




