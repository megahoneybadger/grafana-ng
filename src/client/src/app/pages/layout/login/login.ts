import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'common';
import { finalize } from 'rxjs/operators';
import { Notes } from 'uilib';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: [
     './login.scss'
  ]
})
export class LoginComponent {
  form: FormGroup;
  loggingIn: boolean;
  
  get login() {
		return this.form.get('login');
	}

	get password() {
		return this.form.get('password');
	}

  constructor( 
		private router: Router,
    private authService: AuthService ){
      
	}
	
	ngOnInit(){
    this.authService.logOut();
    
    this.form = new FormGroup({
			'password': new FormControl(null, Validators.required),
			'login': new FormControl(null, Validators.required )
		});
	}

  onSubmit(f: NgForm){
    this.loggingIn = true

    this
      .authService
      .login( this.form.value )
      .pipe( 
        finalize( () => this.loggingIn = false ) )
      .subscribe( 
        x => {
          this.authService.updateToken( x.token );
          Notes.success( "Logged in" );
          this.router.navigate( ['dashboards'] );
        },
        e => {
          Notes.error( "Invalid user name or password" )  
          f.reset();
        }  );
  }
}
