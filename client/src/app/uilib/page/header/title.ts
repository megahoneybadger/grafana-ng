import { Component, Input } from '@angular/core';

@Component({
  selector: 'ed-page-title',
  template: `
    <h1 class="page-header__title" *ngIf="!breadcrumbs || breadcrumbs.length === 0; else breadcrumb" >{{title}}</h1>

    <ng-template #breadcrumb>
      <h1 class="page-header__title">

        <ng-container *ngFor="let bc of breadcrumbs">
          <a class="text-link" [routerLink]="bc.url" *ngIf="bc.url; else emptyUrl">{{bc.title}}</a>

          <ng-template #emptyUrl>
            <span> / {{bc.title}}</span>
          </ng-template>
        </ng-container>

        <span> / {{title}}</span>
      </h1>
    </ng-template>`,

})
export class PageTitleComponent {
  @Input() title: string;
  @Input() breadcrumbs: any[];
}
