import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { Notes } from 'uilib';

export class BaseTestingPage{

	notesSpy: any;

	injectNotes(){
		const n = TestBed.inject( Notes );

    const mf = TestBed.inject( MessageService )
    this.notesSpy = spyOn(mf, 'add' ).and.callThrough();
	}

	validateNoteError( m: string, d: string = null ){
    expect( this.notesSpy ).toHaveBeenCalledWith( {
      key: 'noteError',
      severity:'error',
      summary: m,
      detail: d,
      closable: false 
    } )
	}
	
	validateNoteSuccess( m: string ){
    expect( this.notesSpy ).toHaveBeenCalledWith( {
			key: 'noteSuccess',
			severity:'success',
			summary:m,
			closable: false
    } )
  }
}

