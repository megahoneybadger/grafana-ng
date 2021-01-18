import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export class GridHelper{

  static validateHeaders( element: DebugElement, ...arr: string[] ){
    const headers = element.queryAll( By.css('th'));

    expect( headers.length ).toBe( arr.length );

    for( let i = 0; i < arr.length; ++i ){
      expect( headers[ i ]
        .nativeElement
        .textContent
        .trim() ).toBe( arr[ i ].trim() );
    }
  }

  static validateColumn( element: DebugElement, index: number, value: any ){
    const cols = element.queryAll( By.css( 'td' ) );

    expect( cols ).toBeDefined()

    expect( cols[ index ]
      .nativeElement
      .textContent
      .trim()).toBe( value )
  }

  static validateClosedDeleteBlock( grid: DebugElement, index: number ){
    const deleteBlock = this.getDeleteBlock( grid, index )
    expect( deleteBlock ).toBeTruthy();

    expect( GridHelper.getDeleteStartButton( deleteBlock ) ).toBeTruthy();
    expect( GridHelper.getDeleteCancelButton( deleteBlock ) ).toBeFalsy();
    expect( GridHelper.getDeleteConfirmButton( deleteBlock ) ).toBeFalsy();
  }

  static validateOpenDeleteBlock( grid: DebugElement, index: number ){
    const deleteBlock = this.getDeleteBlock( grid, index )
    expect( deleteBlock ).toBeTruthy();

    expect( GridHelper.getDeleteStartButton( deleteBlock ) ).toBeFalsy();
    expect( GridHelper.getDeleteCancelButton( deleteBlock ) ).toBeTruthy();
    expect( GridHelper.getDeleteConfirmButton( deleteBlock ) ).toBeTruthy();
  }

  static openDeleteBlock( grid: DebugElement, index: number ){
    const deleteBlock = GridHelper.getDeleteBlock( grid, index );
    const startButton = GridHelper.getDeleteStartButton( deleteBlock );
    startButton.triggerEventHandler( 'click', null );
  }

  static cancelDelete( grid: DebugElement, index: number ){
    const deleteBlock = GridHelper.getDeleteBlock( grid, index );
    const cancelButton = GridHelper.getDeleteCancelButton( deleteBlock );
    cancelButton.triggerEventHandler( 'click', null );
  }

  static confirmDelete( grid: DebugElement, index: number ){
    const deleteBlock = GridHelper.getDeleteBlock( grid, index );
    const confirmButton = GridHelper.getDeleteConfirmButton( deleteBlock );
    confirmButton.triggerEventHandler( 'click', null );
  }


  static getDeleteBlock( grid: DebugElement, index: number ){
    return grid.query(By.css(`ed-grid tbody tr:nth-child(${index + 1}) ed-grid-delete-column`))
  }

  static getDeleteStartButton( deleteBlock: DebugElement ){
    return  deleteBlock.query( By.css( "span > a.delete-button.show" ) );
  }

  static getDeleteCancelButton( deleteBlock: DebugElement ){
    return  deleteBlock.query( By.css( ".confirm-delete.show a:nth-child(1)" ) );
  }

  static getDeleteConfirmButton( deleteBlock: DebugElement ){
    return  deleteBlock.query( By.css( ".confirm-delete.show a:nth-child(2)" ) );
  }
}

