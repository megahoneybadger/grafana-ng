
import { Pipe, PipeTransform } from "@angular/core";
import { ExplorerListItem } from "./list";

@Pipe({
  name: 'svgElementsFilter'
})
export class SvgElementListFilter implements PipeTransform{
  transform( value: any, filter: string ){
    if( !value || value.length === 0 || null == filter || "" === filter )
      return value;

    let arr = <Array<ExplorerListItem>> value;

    filter = filter.toLowerCase();

    return ( null == filter ) ?
      arr : arr.filter( x => 
        x.element.node.id.toLowerCase().includes( filter ) ||
        x.element.type.toLowerCase().includes( filter )  );
  }
}