import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DropDownComponent } from '../../dropdown/dropdown';
import { Theme, Timezone, Preferences } from 'src/app/core/models/settings';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'ed-preferences',
  templateUrl: './prefs.html',
})
export class PreferencesComponent  {

  formPrefs: FormGroup;

  availableThemes = DropDownComponent.wrapEnum( Theme );
	availableTimeZones = DropDownComponent.wrapEnum( Timezone );
  availableDashboards: SelectItem[];

  @Output() update = new EventEmitter<Preferences>();

  @Input() set loader$( loader: Observable<[Preferences,any]>){
    loader?.subscribe( x => {
      const homeDashboardId = x[ 0 ].homeDashboardId;

      var defaultHomeDashboard = <any>{} /*new Dashboard()*/;
      defaultHomeDashboard.title = 'Default';
      defaultHomeDashboard.id = 0;

      const dashboards =  [ defaultHomeDashboard, ...x[ 1 ]]
      const homeDashboard = dashboards.find( x => x.id == homeDashboardId );
      this.availableDashboards = DropDownComponent.wrapArray( dashboards, 'title' )

      this.formPrefs.patchValue({
        theme: x[ 0 ].theme,
        timeZone:  x[ 0 ].timeZone,
        homeDashboard: homeDashboard ? homeDashboard : defaultHomeDashboard
      });
    } );
  }

  ngOnInit(){
    this.formPrefs = new FormGroup({
      'theme': new FormControl( null ),
      'homeDashboard': new FormControl( null ),
      'timeZone': new FormControl( null ),
    });
  }

  onSubmit(){
    const v = this.formPrefs.value;

		this.update.emit({
			theme: v.theme,
			homeDashboardId: v.homeDashboard ? v.homeDashboard.id : 0,
			timeZone: v.timeZone
    });
  }
}
