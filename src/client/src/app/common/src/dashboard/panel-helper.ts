
import { Dashboard, RglRect } from './dashboard.m';

export class PanelHelper {
	static toRects( d: Dashboard ) : RglRect[] {
		return d
			.data
			.panels
			.map( p => { 
				return {
					i: p.id.toString(),
					x: p.rect.x,
					y: p.rect.y,
					w: p.rect.w,
					h: p.rect.h
				} } );
	}

}