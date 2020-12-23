import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardStore, AnnotationStore, BaseDasboardComponent, AuthGuard, DashboardService } from 'common';
import { Subscription } from 'rxjs';
import { ErrorMessages, Notes } from 'uilib';
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'dashboard-settings',
  templateUrl: `./settings.html`,
  styleUrls: [`./settings.scss`],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardSettingsComponent extends BaseDasboardComponent{
  readonly PARAM_KEY : string = "editview"

  readonly SECTION_SETTINGS: string = "settings";
  readonly SECTION_ANNOTATIONS: string = "annotations";
  readonly SECTION_TEMPLATING: string = "templating";
  readonly SECTION_LINKS: string = "links";
  readonly SECTION_VERSIONS: string = "versions";
  readonly SECTION_PERMISSIONS: string = "permissions";
  readonly SECTION_JSON: string = "dashboard_json";
  readonly SECTION_MAKE_EDITABLE: string = "make_editable";
  readonly SECTION_NOT_FOUND : string = "not_found";

  sections: any[];
  routeSubs: Subscription;
  activeSectionId: string;

  canSaveAs: boolean;
  canSave: boolean;
  canDelete: boolean;
  showDeleteConfirm: boolean;
  deleting: boolean;

  editable: boolean = undefined;

  constructor( 
    store: DashboardStore,
    private dbService: DashboardService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private annotStore: AnnotationStore,
    private location: Location ){
      super( store );

      this.routeSubs = this
        .activatedRoute
        .queryParamMap
        .subscribe((params) => {
          this.activeSectionId = params.get( this.PARAM_KEY );
          this.activateSection();
        });
  }

  ngOnDestroy(){
    super.ngOnDestroy(); 
    this.routeSubs?.unsubscribe();
    this.annotStore.update();
  }

  onDashboardReady(){
    AuthGuard.canEditDashboard( this.dashboard, this.router );

    this.editable = this.dashboard.data.editable;

    this.buildSections();
    const meta = this.dashboard.meta;

    this.canSaveAs = meta.canEdit /*&& contextSrv.hasEditPermissionInFolders*/;
    this.canSave = meta.canSave;
    this.canDelete = meta.canSave && this.dashboard.id > 0;

    this.dashboard.data.links = this.dashboard.data.links ?? [];
    this.dashboard.data.annotationRules = this.dashboard.data.annotationRules ?? [];
  }

  onDashboardError(){
		Notes.error( ErrorMessages.BAD_GET_DASHBOARD );
		this.router.navigate( [DashboardStore.ROOT_MANAGEMENT] );
  }

  buildSections() {
    this.sections = [];

    if( !this.editable ){
      this.sections.push({
        title: 'General',
        id: this.SECTION_MAKE_EDITABLE,
        icon: 'gicon gicon-preferences',
      });

      this.activateSection()

      return;
    }

    if (this.dashboard.meta.canEdit) {
      this.sections.push({
        title: 'General',
        id: this.SECTION_SETTINGS,
        icon: 'gicon gicon-preferences',
      });

      this.sections.push({
        title: 'Annotations',
        id: this.SECTION_ANNOTATIONS,
        icon: 'gicon gicon-annotation',
      });

      this.sections.push({
        title: 'Variables',
        id: this.SECTION_TEMPLATING,
        icon: 'gicon gicon-variable',
      });

      this.sections.push({
        title: 'Links',
        id: this.SECTION_LINKS,
        icon: 'gicon gicon-link',
      });
    }

    if (this.dashboard.id && this.dashboard.meta.canSave) {
      this.sections.push({
        title: 'Versions',
        id: this.SECTION_VERSIONS,
        icon: 'fa fa-fw fa-history',
      });
    }

    if (this.dashboard.id && this.dashboard.meta.canAdmin) {
      this.sections.push({
        title: 'Permissions',
        id: this.SECTION_PERMISSIONS,
        icon: 'fa fa-fw fa-lock',
      });
    }

    this.sections.push({
      title: 'JSON Model',
      id: this.SECTION_JSON,
      icon: 'gicon gicon-json',
    });

    this.activateSection();
  }

  activateSection(){
    if( !this.sections ){
      return;
    }

    if( !this.activeSectionId ){
      this.activeSectionId = this.sections[ 0 ].id;
    } else {
      const tab = this.sections?.find( x => x.id == this.activeSectionId );

      if( !tab ){
        const sectionNotFound = { 
          title: 'Not found',
          id: this.SECTION_NOT_FOUND,
          icon: 'fa fa-fw fa-warning'
        }
  
        this.sections = [ sectionNotFound, ...this.sections ]
        this.activeSectionId = this.SECTION_NOT_FOUND;
      }
    }
  }

  onSectionSelected( id: string ){
    const url = this
      .router
      .createUrlTree([], {
        relativeTo: this.activatedRoute,
        queryParams: {[this.PARAM_KEY]: id},
        //queryParamsHandling: 'merge',
      })
      .toString()

    this.location.go(url);

    this.activeSectionId = id;

    const index = this.sections.findIndex( x => x.id == this.SECTION_NOT_FOUND );

    if( -1 !== index ){
      this.sections.splice( index, 1 );
    }
  }

  onMakeEditable(){
    this.dashboard.data.editable = this.editable =true;

    this.buildSections();

    this.onSectionSelected( this.SECTION_SETTINGS );
  }

  onDelete(){
    this.deleting = true;

    this
      .dbService
      .deleteDashboard( this.dashboard.uid )
      .pipe( 
        finalize( () => {
          this.showDeleteConfirm = false;
          this.deleting = false
        }))
      .subscribe(
        x => {
					Notes.success( x.message );
					this.router.navigate( [DashboardStore.ROOT_MANAGEMENT] );
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_DASHBOARD ) );
  }
}

