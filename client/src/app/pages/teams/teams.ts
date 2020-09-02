import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamStore } from 'src/app/core/stores/team.store';

@Component({
  selector: 'teams',
  templateUrl: './teams.html',
  styleUrls: ['./teams.scss'],
})
export class TeamsComponent {

  constructor( private router: Router ){
  }

  onTeamClicked( e ){
    this.router.navigate( ["/org/teams/edit/5"] );
  }
}
