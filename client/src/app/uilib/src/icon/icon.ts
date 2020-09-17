import { Component, Input } from '@angular/core';

@Component({
  selector: 'ed-icon',
  templateUrl: './icon.html',
  styleUrls: ['./icon.scss'],
  
})
export class IconComponent {
  private _icon: string;
  private _native: boolean;

  @Input() set icon( i: string ){
    this._icon = i;
    this._native = i?.startsWith( 'gicon-' );
  }

  get icon(): string{
    return this._icon;
  }

  get native(){
    return this._native;
  }
}
