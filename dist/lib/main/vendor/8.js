(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{347:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(446));r(460);var o=r(2),a=s(o),l=s(r(423)),i=s(r(427)),u=s(r(713)),p=r(403),c=r(474),f=r(380);function s(e){return e&&e.__esModule?e:{default:e}}var h=n.default.Sider,d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.componentWillMount=function(){var e=window._acrossDatas.moduleToComponent.data,t=void 0===e?{}:e;0==Object.keys(t).length&&(location.hash="/edit/module")},r.componentDidMount=function(){r.loadMenuDatas(),r.loadPropertyBoardData(),window.onresize=function(){r.setState({})}},r.loadPropertyBoardData=function(){(0,f.ajax)({key:"propertyDatas",success:function(e){var t=e.data;return r.setState({propertyBoardEnumData:t})}})},r.loadMenuDatas=function(){(0,f.ajax)({key:"s_slmh_menu_data",data:{type:2},success:function(e){var t=e.data,n=(0,p.handleMenuGroup)(t),o=0!=t.length?t[0]:{},a=o.group,l=o.id;r.setState({menuDatas:n,openKeys:[a],selectedKeys:[a+l]},function(){return r.loadLayoutDatas()})}})},r.loadLayoutDatas=function(){var e=window._acrossDatas.moduleToComponent.data.id;e&&(0,f.ajax)({key:"s_slmh_meal_layout_data",data:{id:e},success:function(e){var t=e.data;r.setState({layout:t},function(){setTimeout(function(){r.grid.mountRoots()},0)})}})},r.handleOnSave=function(){var e=window._acrossDatas.moduleToComponent.data,t=void 0===e?{}:e,n=r.state.layout,o=Object.assign({},{layout:n},t);console.log(o)},r.handleOnDelete=function(e){var t=e.i,n=r.state.layout;r.setState({layout:(0,c.reject)(n,{i:t})})},r.handleLayoutChange=function(e){return r.setState({layout:e})},r.handleMenuClick=function(e,t,n){r.setState({selectedKeys:t})},r.handleOnOpenChange=function(e){return r.setState({openKeys:e})},r.render=function(){var e=r.state,t=e.layout,o=e.selectedKeys,p=e.menuDatas,c=e.openKeys,f=e.shellStyleDatas,s=e.propertyBoardEnumData,d={selectedKeys:o,menuDatas:p,openKeys:c,onClick:r.handleMenuClick,onOpenChange:r.handleOnOpenChange,shellStyleDatas:f,onSave:r.handleOnSave},y={isEdit:!0,isDelete:!0,layout:t,onLayoutChange:r.handleLayoutChange,onDelete:r.handleOnDelete,propertyBoardEnumData:s,ref:function(e){return e&&(r.grid=e)}};return a.default.createElement(n.default,{style:{minHeight:"100vh",height:document.documentElement.clientHeight||document.body.clientHeight}},a.default.createElement(h,{theme:"light",width:"256"},a.default.createElement(i.default,d)),a.default.createElement(n.default,{style:{position:"relative"}},a.default.createElement(u.default,null,a.default.createElement(l.default,y))))},r.state={layout:[],menuDatas:[],openKeys:[],selectedKeys:[],shellStyleDatas:[],propertyBoardEnumData:[]},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=d},380:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ajax=void 0;var n=r(389),o=r(393),a=["json","html","text"],l=function(e){if(a.includes(e))return e;console.error("fetch type error.")},i=function(e,t){return(e.includes("?")?"&":"?")+u(t)},u=function(e){var t="";for(var r in e)t+=r+"="+e[r]+"&";return t=t.substr(0,t.length-1)},p=function(e){var t=void 0;for(var r in o.path)if(e==r){t=o.path[r];break}if(t)return t};t.ajax=function(e){var t,r,o=e.url,a=e.key,u=(e.method,e.data),c=e.type,f=void 0===c?"json":c,s=e.success;l(f),t=p(a),r=i(t,u),(0,n.fetch)(o||t+r).then(function(e){return e[f]()}).then(function(e){return s&&s(e)}).catch(function(e){return console.error(e)})}},386:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(361)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};r(374);var a=r(2),l=i(a);function i(e){return e&&e.__esModule?e:{default:e}}r(387);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));p.call(r);var n=e.title;return r.state={title:n,propertyBoardVisible:!1,propertyBoardDataSource:{}},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}(),p=function(){var e=this;this.componentDidMount=function(){},this.handleOnDelete=function(t){var r=e.props.onDelete,n=e.props["data-grid"]||{};e.preventBubble(t),r&&r(n)},this.handleOnEdit=function(t){var r=e.props,n=r.style,o=r.onEdit,a=e.props["data-grid"]||{};e.preventBubble(t),e.setState({propertyBoardVisible:!0,propertyBoardDataSource:{title:a.title||"",style:n}},function(){o&&o(!0)})},this.preventBubble=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},this.handleDrawerOnClose=function(t){var r=e.props.onEdit;e.setState({propertyBoardVisible:t},function(){r&&r(t)})},this.render=function(){var t=e.props,r=t.children,a=t.isEdit,i=t.isDelete,u=t.type,p=void 0===u?"component":u,c=t.onClick,f=t.showTitle,s=void 0===f||f,h=e.state.title,d=l.default.createElement(n.default,{type:"edit",theme:"outlined",className:"operation",onMouseDown:e.handleOnEdit,style:{right:22}}),y=l.default.createElement(n.default,{type:"delete",theme:"outlined",className:"operation",onMouseDown:e.handleOnDelete.bind(e),style:{right:0}}),m=Object.assign({},e.props);return delete m.getDrawerStatus,delete m.isDelete,delete m.onDelete,delete m.onEdit,delete m.isEdit,delete m.title,delete m.showTitle,l.default.createElement("div",o({},m,{className:"Shell"+("component"!=p?" border-transition":""),onClick:function(e){return"add"==p&&c&&c(e)}}),i&&y,a&&d,"add"!=p&&s&&l.default.createElement("span",{className:"operation-title"},h),r)}};t.default=u},387:function(e,t,r){var n=r(388);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(360)(n,o);n.locals&&(e.exports=n.locals)},388:function(e,t,r){(e.exports=r(359)(!1)).push([e.i,".Shell .operation {\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    float: right;\r\n    position: absolute;\r\n    top: 0px;\r\n}\r\n\r\n.Shell .operation-title {\r\n    font-family: MicrosoftYaHei;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: 1px;\r\n    color: #171717;\r\n    padding-left: 10px;\r\n}\r\n\r\n.Shell {\r\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n}\r\n\r\n.Shell:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.border-transition:hover {\r\n    border: 1px dashed #1890ff;\r\n}\r\n\r\n.border-transition {\r\n    border: 1px dashed #d9d9d9;\r\n}",""])},393:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.path={propertyDatas:"../../../mock/propertyDatas.json",s_slmh_menu_data:"http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=s_slmh_menu_data",s_slmh_meal_layout_data:"http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=s_slmh_meal_layout_data",s_slmh_meal_switch:"http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=s_slmh_meal_switch",d_slmh_meal:"http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=d_slmh_meal"}},403:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=[],r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var u=l.value,p=u.group,c=u.groupname;r.push(JSON.stringify({group:p,groupName:c}))}}catch(e){o=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw a}}r=Array.from(new Set(r));var f=!0,s=!1,h=void 0;try{for(var d,y=r[Symbol.iterator]();!(f=(d=y.next()).done);f=!0){var m=d.value;t.push(JSON.parse(m))}}catch(e){s=!0,h=e}finally{try{!f&&y.return&&y.return()}finally{if(s)throw h}}return t};t.handleMenuGroup=function(e){var t=[],r=n(e),o=!0,a=!1,l=void 0;try{for(var i,u=r[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var p=i.value,c=p.group,f={groupName:p.groupName,group:c,children:[],key:""},s=!0,h=!1,d=void 0;try{for(var y,m=e[Symbol.iterator]();!(s=(y=m.next()).done);s=!0){var v=y.value,w=v.group,b=v.id,g=v.text,_=v.key,O=f.children;w==c&&(f.key=w+b,f.id=b,O.push(Object.assign({},v,{title:g,value:b,key:_})))}}catch(e){h=!0,d=e}finally{try{!s&&m.return&&m.return()}finally{if(h)throw d}}t.push(f)}}catch(e){a=!0,l=e}finally{try{!o&&u.return&&u.return()}finally{if(a)throw l}}return t}},423:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=u(n),a=u(r(461));r(466),r(467);var l=u(r(386)),i=u(r(426));function u(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.mountRoots=function(){var e=n.props.layout;new i.default(e,n.roots).load()},n.handleDragDrop=function(e){var t=n.props.layout,r=JSON.parse(e.dataTransfer.getData("menuItemToGrid")),o=r.key,a=r.url,l=r.text,i=r.style;t.push({i:""+o+t.length,x:2*t.length%12,y:1/0,w:2,h:9,type:"iframe",imgUrl:a,title:l,style:i}),n.setState({})},n.createShellChild=function(e,t){var r=t.i,a=t.type,l=t.imgurl,i=t.path,u="calc(100% - 21px)";return"iframe"==a?e?o.default.createElement("img",{src:l,style:{width:"100%",height:u}}):o.default.createElement("iframe",{src:i,style:{border:"none",width:"100%",height:u,overflow:"auto"}}):o.default.createElement("div",{style:{height:u},ref:function(e){return e&&(n.roots[r]=e)}})},n.handleShellonEdit=function(e,t){return Promise.all([r.e(1),r.e(3),r.e(10),r.e(11)]).then(r.t.bind(null,618,7)).then(function(r){n.setState({isDrawerOpen:e,propertyBoardDataSource:t,PropertyBoard:r.default})})},n.handleShellStyleOnChange=function(e){var t=n.props,r=t.onLayoutChange,o=t.layout,a=[],l=!0,i=!1,u=void 0;try{for(var p,c=o[Symbol.iterator]();!(l=(p=c.next()).done);l=!0){var f=p.value,s=f.i,h=f.style,d=void 0===h?{}:h,y=f;s==e.id&&(y.style=Object.assign(d,e)),a.push(y)}}catch(e){i=!0,u=e}finally{try{!l&&c.return&&c.return()}finally{if(i)throw u}}r&&r(a)},n.render=function(){var e=n.state,t=e.isDrawerOpen,r=e.propertyBoardDataSource,i=e.PropertyBoard,u=n.props,p=u.isEdit,c=void 0===p||p,f=u.isDelete,s=void 0===f||f,h=u.layout,d=u.onDelete,y=u.propertyBoardEnumData,m={className:"layout",cols:12,rowHeight:30,width:(document.documentElement.clientWidth||document.body.clientWidth)-(c?256:0),margin:[10,10],isDraggable:c,isResizable:c,style:{height:"100%",background:"#f5f6fa"}},v={visible:t,onClose:function(e){n.setState({isDrawerOpen:e},function(){setTimeout(function(){return n.setState({PropertyBoard:null})},301)})},shellStyleDatas:r,enumDatas:y,onChange:n.handleShellStyleOnChange};return o.default.createElement("div",{className:"Grid",onDrop:n.handleDragDrop,onDragOver:function(e){return e.preventDefault()}},o.default.createElement(a.default,m,h.map(function(e){var t=e.i,r=e.title,a=e.style,i=void 0===a?{}:a,u=e.showtitle,p={key:t,title:r,isEdit:c,isDelete:s,onDelete:d,showTitle:u,style:Object.assign({},{zIndex:1,userSelect:"none",boxShadow:"0px 0px 29px 0px rgba(93, 106, 113, 0.12)",borderRadius:2},i),"data-grid":e,onEdit:function(t){return n.handleShellonEdit(t,e)}};return o.default.createElement(l.default,p,n.createShellChild(c,e))})),i&&o.default.createElement(i,v))},n.state={isDrawerOpen:!1,propertyBoardDataSource:{},PropertyBoard:null},n.roots={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),t}();t.default=p},426:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(389);var o=function(e){return(0,n.fetch)(e).then(function(e){return e.text()}).then(function(e){var t={exports:{}};return new Function("module",e)(t),t.exports}).catch(function(e){return console.error("importPolyfill error: "+e)})};t.default=function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.load=function(){var e=[],t=[],r=!0,a=!1,l=void 0;try{for(var i,u=n.layout[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var p=i.value,c=p.path;"iframe"!=p.type&&(e.push(o(c)),t.push(p))}}catch(e){a=!0,l=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw l}}n.layout=t,n.loadScripts(e,0,[],function(e){for(var t=0;t<e.length;t++)if(e[t]){var r=n.layout[t].i,o=new e[t](n.roots[r]),a=o._moduleOnMount;a&&a.call(o)}})},this.loadScripts=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments[3];t!=e.length?e[t].then(function(a){r.push(a),n.loadScripts(e,++t,r,o)}).catch(function(e){return console.error("loadScripts error: "+e)}):o&&o(r)},this.layout=t,this.roots=r}},427:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(361)),o=u(r(390));r(374),r(392);var a=r(2),l=u(a),i=u(r(431));function u(e){return e&&e.__esModule?e:{default:e}}var p=o.default.SubMenu,c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.componentDidMount=function(){},r.handleMenuClick=function(e){var t=e.item,n=(e.key,e.keyPath),o=r.props.onClick,a=t.props.item,l=void 0===a?{}:a;o&&o(l?l.group:null,[n[n.length-1]+l.id],l.id)},r.handleShellStyle=function(e){return r.setState({currentShellStyle:e})},r.render=function(){var e=r.props,t=e.type,a=void 0===t?"component":t,u=(e.shellStyleDatas,e.menuDatas),c=void 0===u?[]:u,f=e.openKeys,s=e.selectedKeys,h=e.onOpenChange,d=e.onSave,y=r.state.currentShellStyle,m={openKeys:f,selectedKeys:[r.menuSelectPrefix+s[0]],mode:"inline",onOpenChange:h,onClick:r.handleMenuClick},v=l.default.createElement(o.default.Item,{key:"back",onClick:function(){return location.hash="/display"}},l.default.createElement(n.default,{type:"arrow-left",theme:"outlined"}),l.default.createElement("span",null,"首页")),w=l.default.createElement(o.default.Item,{key:"back",onClick:function(){return d&&d()}},l.default.createElement(n.default,{type:"arrow-left",theme:"outlined"}),l.default.createElement("span",null,"保存并返回"));return l.default.createElement("div",{className:"DraggableMenu"},l.default.createElement(o.default,m,"module"==a&&v,"component"==a&&w,c.map(function(e){var t=e.groupName,o=e.children,a=void 0===o?[]:o,u=e.group,c=l.default.createElement("span",null,l.default.createElement(n.default,{type:"laptop",theme:"outlined"}),l.default.createElement("span",null,t));return l.default.createElement(p,{key:u,title:c},a.map(function(e,t){var n=e.group,o=e.id;return l.default.createElement(i.default,{key:""+r.menuSelectPrefix+n+o,item:Object.assign({},e,{style:y})})}))})))},r.state={currentShellStyle:{}},r.menuSelectPrefix="dragMenuItem",r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}();t.default=c},431:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(390));r(392);var o=r(2),a=l(o);function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,u=Array(l),p=0;p<l;p++)u[p]=arguments[p];return r=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.handleDragStart=function(e,t){e.dataTransfer.setData("menuItemToGrid",JSON.stringify(t))},o.render=function(){var e=o.props.item,t=e.draggable,r=void 0===t||t,l=e.text,i=e.id,u={key:e.group+i,draggable:r,onDragStart:function(t){return o.handleDragStart(t,e)}};return a.default.createElement(n.default.Item,Object.assign({},o.props,u),l)},i(o,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=u},713:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n);function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}r(714);var l=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,i=Array(l),u=0;u<l;u++)i[u]=arguments[u];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.handleScale=function(e){for(var t=[],r=[],n=0;n<9;n++)r.push(o.default.createElement("div",{className:"mm-"+e,key:"mm-"+e+"-"+n}));for(var a=0;a<10;a++)t.push(o.default.createElement("div",{className:"cm-"+e,key:"cm-"+e+"-"+a},r));return t},n.render=function(){var e=n.props.children;return o.default.createElement("div",{className:"Ruler"},o.default.createElement("div",{className:"wrapper"},n.handleScale("horizontal")),o.default.createElement("div",{className:"wrapper"},n.handleScale("vertical")),o.default.createElement("div",{style:{padding:20}},e))},a(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),t}();t.default=l},714:function(e,t,r){var n=r(715);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(360)(n,o);n.locals&&(e.exports=n.locals)},715:function(e,t,r){(e.exports=r(359)(!1)).push([e.i,'.Ruler .wrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal,\r\n.Ruler .wrapper .mm-horizontal {\r\n    position: absolute;\r\n    border-left: 1px solid #555;\r\n    height: 14px;\r\n    width: 9.8%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:after {\r\n    position: absolute;\r\n    bottom: -15px;\r\n    font: 11px/1 sans-serif;\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal {\r\n    height: 5px;\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal:nth-of-type(5) {\r\n    height: 10px;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(1) {\r\n    left: 0%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(1):after {\r\n    content: "";\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(2) {\r\n    left: 10%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(2):after {\r\n    content: "1";\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(3) {\r\n    left: 20%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(3):after {\r\n    content: "2";\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(4) {\r\n    left: 30%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(4):after {\r\n    content: "3";\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(5) {\r\n    left: 40%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(5):after {\r\n    content: "4";\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(6) {\r\n    left: 50%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(6):after {\r\n    content: "5";\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(7) {\r\n    left: 60%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(7):after {\r\n    content: "6";\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(8) {\r\n    left: 70%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(8):after {\r\n    content: "7";\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(9) {\r\n    left: 80%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(9):after {\r\n    content: "8";\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(10) {\r\n    left: 90%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(10):after {\r\n    content: "9";\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(11) {\r\n    left: 100%;\r\n}\r\n\r\n.Ruler .wrapper .cm-horizontal:nth-of-type(11):after {\r\n    content: "10";\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal:nth-of-type(1) {\r\n    left: 10%;\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal:nth-of-type(2) {\r\n    left: 20%;\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal:nth-of-type(3) {\r\n    left: 30%;\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal:nth-of-type(4) {\r\n    left: 40%;\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal:nth-of-type(5) {\r\n    left: 50%;\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal:nth-of-type(6) {\r\n    left: 60%;\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal:nth-of-type(7) {\r\n    left: 70%;\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal:nth-of-type(8) {\r\n    left: 80%;\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal:nth-of-type(9) {\r\n    left: 90%;\r\n}\r\n\r\n.Ruler .wrapper .mm-horizontal:nth-of-type(10) {\r\n    left: 100%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical,\r\n.Ruler .wrapper .mm-vertical {\r\n    position: absolute;\r\n    border-top: 1px solid #555;\r\n    width: 14px;\r\n    height: 9.8%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:after {\r\n    position: absolute;\r\n    left: 15px;\r\n    font: 11px/1 sans-serif;\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical {\r\n    width: 5px;\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical:nth-of-type(5) {\r\n    width: 10px;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(1) {\r\n    top: 0%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(1):after {\r\n    content: "";\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(2) {\r\n    top: 10%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(2):after {\r\n    content: "1";\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(3) {\r\n    top: 20%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(3):after {\r\n    content: "2";\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(4) {\r\n    top: 30%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(4):after {\r\n    content: "3";\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(5) {\r\n    top: 40%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(5):after {\r\n    content: "4";\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(6) {\r\n    top: 50%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(6):after {\r\n    content: "5";\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(7) {\r\n    top: 60%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(7):after {\r\n    content: "6";\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(8) {\r\n    top: 70%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(8):after {\r\n    content: "7";\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(9) {\r\n    top: 80%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(9):after {\r\n    content: "8";\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(10) {\r\n    top: 90%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(10):after {\r\n    content: "9";\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(11) {\r\n    top: 100%;\r\n}\r\n\r\n.Ruler .wrapper .cm-vertical:nth-of-type(11):after {\r\n    content: "10";\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical:nth-of-type(1) {\r\n    top: 10%;\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical:nth-of-type(2) {\r\n    top: 20%;\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical:nth-of-type(3) {\r\n    top: 30%;\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical:nth-of-type(4) {\r\n    top: 40%;\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical:nth-of-type(5) {\r\n    top: 50%;\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical:nth-of-type(6) {\r\n    top: 60%;\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical:nth-of-type(7) {\r\n    top: 70%;\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical:nth-of-type(8) {\r\n    top: 80%;\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical:nth-of-type(9) {\r\n    top: 90%;\r\n}\r\n\r\n.Ruler .wrapper .mm-vertical:nth-of-type(10) {\r\n    top: 100%;\r\n}',""])}}]);