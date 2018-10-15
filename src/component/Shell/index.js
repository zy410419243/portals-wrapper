/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-10-08 10:39:22
 * @Last Modified by: zy9
 * @Last Modified time: 2018-10-15 14:30:12
 */
import React, { Component } from 'react';

import { Icon } from 'antd';

import './css/Shell.css';

export default class Shell extends Component {
	constructor (props) {
		super(props);
		const { title } = props;

		this.state = {
			title,
			propertyBoardVisible: false,
			propertyBoardDataSource: {}
		};
	}

    componentDidMount = () => {

    }

	handleOnDelete = e => {
		const { onDelete } = this.props;
		const dataGrid = this.props['data-grid'] || {};

		this.preventBubble(e);

		onDelete && onDelete(dataGrid);
	}

	handleOnEdit = e => {
		const { style, onEdit } = this.props;
		const dataGrid = this.props['data-grid'] || {};

		this.preventBubble(e);

		this.setState({
			propertyBoardVisible: true,
			propertyBoardDataSource: { title: dataGrid.title || '', style },
		}, () => {
			onEdit && onEdit(true);
		});
	}

	// 阻止react-grid-layout的拖拽事件在点击时生效
	preventBubble = e => {
		if(e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
	}

	handleDrawerOnClose = propertyBoardVisible => {
		const { onEdit } = this.props;

		this.setState({ propertyBoardVisible }, () => {
			onEdit && onEdit(propertyBoardVisible);
		});
	}

    render = () => {
    	const { children, isEdit } = this.props;
    	const { title } = this.state;

    	const operateButton = (
    		<div className='operate-button-group'>
    			<Icon type='delete' theme='outlined' className='operation' onMouseDown={ this.handleOnDelete } />
    			<Icon type='edit' theme='outlined' className='operation' onMouseDown={ this.handleOnEdit } />
    		</div>
    	);

    	const operateBoard = (
    		<div style={{ height: 30, background: '#f5f6fa' }}>
    			{ isEdit && operateButton }
    			<span className='operation-title'>{ title }</span>
    		</div>
    	);

    	// 容错，getDrawerStatus为react不识别的handle
    	let newProps = Object.assign({}, this.props);

    	delete newProps.getDrawerStatus;
    	delete newProps.onDelete;
    	delete newProps.onEdit;
    	delete newProps.isEdit;

    	return (
    		<div { ...newProps } className='Shell'>
    			{ operateBoard }

    			{ children }
    		</div>
    	);
    }
}