(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=l(r),a=l(n(74));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.render=function(){return o.default.createElement("div",{className:"Display"},o.default.createElement(a.default,{isEdit:!1}))},i(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=u},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=s(r),a=n(95),l=s(n(97));n(102),n(103);var i=s(n(76)),u=s(n(79));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.componentDidMount=function(){r.loadLayout(function(){var e=r.state.layout;new u.default(e,r.roots).load()})},r.loadLayout=function(e){fetch("../../../mock/layoutDatas.json").then(function(e){return e.json()}).then(function(t){var n=t.layout;r.setState({layout:n},function(){return e&&e()})})},r.handleLayoutChange=function(e){console.log(e)},r.handleDragDrop=function(e){var t=r.state.layout,n=JSON.parse(e.dataTransfer.getData("menuItemToGrid")),o=n.key,a=n.url,l=n.text,i=n.style;t.push({i:""+o+t.length,x:2*t.length%12,y:1/0,w:2,h:9,type:"iframe",imgUrl:a,title:l,style:i}),r.setState({layout:t})},r.handleShellOnDelete=function(e){var t=e.i,n=r.state.layout;r.setState({layout:(0,a.reject)(n,{i:t})})},r.createShellChild=function(e,t){var n=t.i,a=t.type,l=t.imgUrl,i=t.path,u="calc(100% - 30px)";return"iframe"==a?e?o.default.createElement("img",{src:l,style:{width:"100%",height:u}}):o.default.createElement("iframe",{src:i,style:{border:"none",width:"100%",height:u,overflow:"auto"}}):o.default.createElement("div",{style:{height:u},ref:function(e){return r.roots.push(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e))}})},r.handleShellonEdit=function(e,t){return Promise.all([n.e(6),n.e(4)]).then(n.t.bind(null,109,7)).then(function(n){return r.setState({isDrawerOpen:e,propertyBoardDataSource:t,PropertyBoard:n.default})})},r.render=function(){var e=r.state,t=e.layout,n=e.isDrawerOpen,a=e.propertyBoardDataSource,u=e.currentShellStyle,s=e.PropertyBoard,c=r.props.isEdit,f=void 0===c||c,p={className:"layout",cols:12,rowHeight:30,width:(document.documentElement.clientWidth||document.body.clientWidth)-(f?256:0),margin:[10,10],onLayoutChange:r.handleLayoutChange,isDraggable:f,isResizable:f,style:{height:"100%",background:"#f5f6fa"}},d={visible:n,onClose:function(e){r.setState({isDrawerOpen:e},function(){setTimeout(function(){r.setState({PropertyBoard:null})},301)})},dataSource:a,onChange:function(e){return r.setState({currentShellStyle:e})}};return o.default.createElement("div",{className:"Grid",onDrop:r.handleDragDrop,onDragOver:function(e){return e.preventDefault()}},o.default.createElement(l.default,p,t.map(function(e){var t=e.i,n=e.title,a=e.style,l=void 0===a?{}:a,s={key:t,title:n,isEdit:f,"data-grid":e,style:Object.assign({},{zIndex:1,userSelect:"none"},{boxShadow:"0px 0px 29px 0px rgba(93, 106, 113, 0.12)",borderRadius:2},l,u),onDelete:r.handleShellOnDelete,onEdit:function(t){return r.handleShellonEdit(t,e)}};return o.default.createElement(i.default,s,r.createShellChild(f,e))})),s&&o.default.createElement(s,d))},r.state={layout:[],isDrawerOpen:!1,propertyBoardDataSource:{},currentShellStyle:{},PropertyBoard:null},r.roots=[],r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=c},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(33)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n(56);var a=n(1),l=i(a);function i(e){return e&&e.__esModule?e:{default:e}}n(77);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));s.call(n);var r=e.title;return n.state={title:r,propertyBoardVisible:!1,propertyBoardDataSource:{}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}(),s=function(){var e=this;this.componentDidMount=function(){},this.handleOnDelete=function(t){var n=e.props.onDelete,r=e.props["data-grid"]||{};e.preventBubble(t),n&&n(r)},this.handleOnEdit=function(t){var n=e.props,r=n.style,o=n.onEdit,a=e.props["data-grid"]||{};e.preventBubble(t),e.setState({propertyBoardVisible:!0,propertyBoardDataSource:{title:a.title||"",style:r}},function(){o&&o(!0)})},this.preventBubble=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},this.handleDrawerOnClose=function(t){var n=e.props.onEdit;e.setState({propertyBoardVisible:t},function(){n&&n(t)})},this.render=function(){var t=e.props,n=t.children,a=t.isEdit,i=e.state.title,u=l.default.createElement("div",{className:"operate-button-group"},l.default.createElement(r.default,{type:"delete",theme:"outlined",className:"operation",onMouseDown:e.handleOnDelete}),l.default.createElement(r.default,{type:"edit",theme:"outlined",className:"operation",onMouseDown:e.handleOnEdit})),s=l.default.createElement("div",{style:{height:30,background:"#f5f6fa"}},a&&u,l.default.createElement("span",{className:"operation-title"},i)),c=Object.assign({},e.props);return delete c.getDrawerStatus,delete c.onDelete,delete c.onEdit,delete c.isEdit,l.default.createElement("div",o({},c,{className:"Shell"}),s,n)}};t.default=u},77:function(e,t,n){var r=n(78);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(30)(r,o);r.locals&&(e.exports=r.locals)},78:function(e,t,n){(e.exports=n(29)(!1)).push([e.i,".Shell .operation {\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    float: right;\r\n}\r\n\r\n.Shell .operation-title {\r\n    font-family: MicrosoftYaHei;\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: 1px;\r\n    color: #171717;\r\n    padding-left: 10px;\r\n}",""])},79:function(module,exports,__webpack_require__){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var ModulesLoader=function ModulesLoader(layout,roots){var _this=this;_classCallCheck(this,ModulesLoader),this.load=function(){var e=[],t=!0,n=!1,r=void 0;try{for(var o,a=_this.layout[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var l=o.value,i=l.path;"iframe"!=l.type&&e.push("import('"+i+"')")}}catch(e){n=!0,r=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}e="["+e.toString()+"]",_this.loadScripts(e)},this.loadScripts=function(pathArr){Promise.all(eval(""+pathArr)).then(function(e){for(var t=0;t<e.length;t++){var n=e[t].TestModule,r=_this.layout[t].i,o=new n(_this.roots[t][r]),a=o._moduleOnMount;a&&a.call(o)}})},this.layout=layout,this.roots=roots};exports.default=ModulesLoader}}]);