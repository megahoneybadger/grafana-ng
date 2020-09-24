export class SearchFilter{
  query: string;
  starred: boolean;
  tags: string[] = []
  folderId: number;

  get notEmpty() : boolean  {
    return ( this.starred ) || ( this.tags.length > 0 ) || (!!this.query);
  }

  get empty() : boolean{
    return !this.notEmpty;
  }

  get request() : string{
    let filter = '';

    if( undefined !== this.folderId ){
      filter = `folderIds=${this.folderId}`;
    }

    if( this.query ){
      filter = filter ? `${filter}&` : filter;
      filter = `${filter}query=${this.query}`;
    }

    if( this.starred ){
      filter = filter ? `${filter}&` : filter;
      filter = `${filter}starred=true`
    }

    if( this.tags.length > 0 ){
      this
        .tags
        .forEach( x => filter=`${filter}${filter?'&':''}tag=${encodeURIComponent(x)}` )
    }

    console.log( `${filter}` );

    return filter;
  }

  copy(): SearchFilter{
    const sf = new SearchFilter();
    sf.folderId = this.folderId;
    sf.tags = [...this.tags];
    sf.query = this.query;
    sf.starred = this.starred;

    return sf;
  }

 
}

