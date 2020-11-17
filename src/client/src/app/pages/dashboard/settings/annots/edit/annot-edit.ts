import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnnotationQueryType, AnnotationRule } from 'common';
import { DropDownComponent } from 'uilib';

@Component({
  selector: 'annotation-rule-editor',
  templateUrl: './annot-edit.html',
})
export class AnnotationRuleEditorComponent {
	@Input() rule: AnnotationRule;
	@Input() edit: boolean = true;
  
	@Output() update = new EventEmitter();
	@Output() add = new EventEmitter();
  
	availableQueryTypes = DropDownComponent.wrapEnum(AnnotationQueryType);
	
	availableLimits = DropDownComponent.wrapArray( [10, 50, 100, 200, 300, 500, 1000, 2000] )

	AnnotationQueryTypeRef = AnnotationQueryType;
}