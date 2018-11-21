/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-09-26 11:25:50
 * @Last Modified by: zy9
 * @Last Modified time: 2018-11-21 16:58:02
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Shell from '../../component/Shell';
import Loader from './ModulesLoader';

import './css/Grid.css';

export default class Grid extends Component {
	constructor (props) {
		super(props);

		this.state = {
			isDrawerOpen: false,
			propertyBoardDataSource: {},
			PropertyBoard: null,
		};

		this.roots = {};
	}

	static defaultProps = {
		isEdit: false,
		isDelete: false,
		layout: [],
		propertyBoardEnumData: [],
	}

	mountRoots = () => {
		const { layout } = this.props;

    	const loader = new Loader(layout, this.roots);

    	loader.load();
	}

	handleLayoutChange = layout => {
		const { onLayoutChange, layout: propsLayout } = this.props;

		let newLayout = [];

		for(let i = 0; i < layout.length; i++) {
			const item = layout[i];
			const jtem = propsLayout[i];

			newLayout.push(Object.assign({}, jtem, item));
		}

		onLayoutChange && onLayoutChange(newLayout);
	}

	handleDragDrop = e => {
		let { layout, onLayoutChange } = this.props;
		const item = JSON.parse(e.dataTransfer.getData('menuItemToGrid'));
		const { key, imgurl: imgUrl, text, style, url } = item;
		const defaultProps = {
			i: '' + key + layout.length,
			x: (layout.length * 2) % 12,
			w: 2, h: 9, y: 0,
			url,
			path: url,
			imgUrl,
			title: text,
			style: JSON.stringify(style),
		};

		layout.push(Object.assign({}, item, defaultProps));

		onLayoutChange && onLayoutChange(layout);
	}

	createShellChild = (isEdit, item) => {
		const { i, moduletype: type, imgurl, imgUrl, path } = item;
		const height = 'calc(100% - 21px)';

		if(isEdit) {
			return (
				<img
					src={ imgurl || imgUrl }
					style={{ width: '100%', height }}
				/>
			);
		}

		if(type == 'iframe') {
			return (
				<iframe
					src={ path }
					style={{ height }}
				></iframe>
			);
		}

		return (
			<div
				className='render-div'
				style={{ height }}
				ref={ ref => ref && (this.roots[i] = ref) }
				id={ i }
			/>
		);
	}

	handleShellonEdit = (isDrawerOpen, item) => {
		import('../PropertyBoard')
			.then(PropertyBoard => {
				this.setState({
					isDrawerOpen,
					propertyBoardDataSource: item,
					PropertyBoard: PropertyBoard.default || PropertyBoard,
				});
			});
	}

	handleShellStyleOnChange = currentShellStyle => {
		const { onLayoutChange, layout } = this.props;
		let newLayout = [];

		for(let item of layout) {
			const { i: key, style = {} } = item;
			const { id } = currentShellStyle;
			let obj = item;

			if(key == id) {
				obj.style = Object.assign(style, currentShellStyle);
				delete obj.style.id;
			}

			newLayout.push(obj);
		}

		onLayoutChange && onLayoutChange(newLayout);
	}

    render = () => {
    	const {
    		isDrawerOpen,
    		propertyBoardDataSource,
    		PropertyBoard
    	} = this.state;
    	const {
    		isEdit = true,
    		isDelete = true,
    		layout,
    		onDelete,
    		propertyBoardEnumData
    	} = this.props;

    	const layoutProps = {
    		className: 'layout',
    		cols: 12,
    		rowHeight: 30,
    		width: document.body.clientWidth - (isEdit ? 256 : 0),
    		// margin: [10, 10],
    		onLayoutChange: this.handleLayoutChange,
    		isDraggable: isEdit,
    		isResizable: isEdit,
    		// compactType: 'horizontal',
    		style: {
    			background: '#f5f6fa',
    			height: layout.length != 0 ? '100%' : 500
    		},
    	};

    	const propertyBoardProps = {
    		visible: isDrawerOpen,
    		onClose: isDrawerOpen => {
    			this.setState({ isDrawerOpen }, () => {
    				// 关闭抽屉时销毁外壳中的元素，好在再次点击时执行componentDidMount中的方法
    				setTimeout(() => {
    					this.setState({ PropertyBoard: null });
    				}, 300);
    			});
    		},
    		shellStyleDatas: propertyBoardDataSource,
    		enumDatas: propertyBoardEnumData,
    		onChange: this.handleShellStyleOnChange,
    	};

    	return (
    		<div
    			className='Grid'
    			onDrop={ this.handleDragDrop }
    			onDragOver={ e => e.preventDefault() }
    		>
    			<GridLayout { ...layoutProps }>
    				{
    					layout.map(item => {
    						const {
    							i: key,
    							title,
    							style = {},
    							showtitle: showTitle
    						} = item;

    						const shellProps = {
    							key,
    							title,
    							isEdit,
    							isDelete,
    							onDelete,
    							showTitle,
    							style,
    							'data-grid': item,
    							onEdit: isDrawerOpen => {
    								this.handleShellonEdit(isDrawerOpen, item);
    							},
    						};

    						return (
    							<Shell { ...shellProps }>
    								{ this.createShellChild(isEdit, item) }
    							</Shell>
    						);
    					})
    				}
    			</GridLayout>

    			{ PropertyBoard && <PropertyBoard { ...propertyBoardProps } /> }
    		</div>
    	);
    }
}

Grid.propTypes = {
	isEdit: PropTypes.bool,
	isDelete: PropTypes.bool,
	layout: PropTypes.array,
	onLayoutChange: PropTypes.func,
	onDelete: PropTypes.func,
	propertyBoardEnumData: PropTypes.array,
};