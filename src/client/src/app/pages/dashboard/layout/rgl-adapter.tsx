import * as React from 'react';
import * as ReactDOM from 'react-dom';

import _ from "lodash";
import RGL, { WidthProvider,  } from "react-grid-layout";
import { ReactGridLayoutStore } from "./rgl.store";
import { Subscription } from 'rxjs';
import { GRID_CELL_HEIGHT, GRID_CELL_VMARGIN, GRID_COLUMN_COUNT,
	 IReactGridLayoutProps, IReactGridLayoutState } from './rgl.m';
import { RglRect } from 'common';

const ReactGridLayout = WidthProvider(RGL);

export class ReactGridLayoutAdapterComponent extends 
	React.Component<IReactGridLayoutProps, IReactGridLayoutState> {

	addSubs : Subscription;
	removeSubs : Subscription;
	initSubs : Subscription;

	static defaultProps = {
    
	};
	
  constructor(props) {
		super(props);
	
		this.state = { layout : []};
		
		this.onLayoutChanged  = this.onLayoutChanged.bind(this);
	}

	componentDidMount(){
		this.addSubs = this
			.props
			.service
			.addRect$
			.subscribe( x => this.addRect( x ) );

		this.removeSubs = this
			.props
			.service
			.removeRect$
			.subscribe( x => this.removeRect( x ) );

		this.initSubs = this
			.props
			.service
			.initialized$
			.subscribe( l => this.setState( { 
				layout: [...l]
			} ) );
	}

	componentWillUnmount(){
		this.addSubs?.unsubscribe();
		this.removeSubs?.unsubscribe();
		this.initSubs?.unsubscribe();
	}
	
	addRect( id: string ) {
		if( !id ){
			return;
		}

		const rect = {
			i: id,
			x: 0,
		  y: Infinity, // puts it at the bottom
			w: 8,
			h: 7
		};

		this.setState(( s ) => ({
			layout: [ ...s.layout, rect ]
    }));
	}

	removeRect( id: string ) {
		if( !id ){
			return;
		}

		const index = this
			.state
			.layout
			.findIndex( x => x.i == id );

		if( -1 != index ){
			this.state.layout.splice( index, 1 );

			this.setState(( s ) => ({
				layout: [ ...this.state.layout ]
			}));
		}
	}
	
	onLayoutChanged( layout: RglRect [] ){
		this.setState({ layout });

		this
			.props
			.service
			.change( layout );
	}

  render() {
    return (
			<ReactGridLayout 
				layout={this.state.layout}
				onLayoutChange={this.onLayoutChanged}
				
				useCSSTransforms={true}
				margin={[GRID_CELL_VMARGIN, GRID_CELL_VMARGIN]}
				cols={GRID_COLUMN_COUNT}
				rowHeight={GRID_CELL_HEIGHT}
				draggableHandle=".panel-header"
				
				{...this.props} >
				 {_.map(this.state.layout, pr => this.renderRect(pr))}
			</ReactGridLayout >
    );
	}

	renderRect( pr: RglRect ) {
    return (
			<div key={pr.i} className="panel"  >
				<div id={'panel' + pr.i} style={{height: '100%'}} >
				</div>
			</div>
		);
  }
	
	static create( containerId: string, service: ReactGridLayoutStore ) {
    ReactDOM.render(
      <ReactGridLayoutAdapterComponent service={service} />,
      	document.getElementById(containerId) );
	}

	static destroy(containerId: string){
		ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
	}
}

