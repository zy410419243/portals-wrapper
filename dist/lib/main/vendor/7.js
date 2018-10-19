(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(237));n(250);var o=n(1),a=i(o),l=i(n(217)),s=(i(n(67)),i(n(380)));function i(e){return e&&e.__esModule?e:{default:e}}var u=r.default.Sider,c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handleMenuClick=function(e){return n.loadLayoutDatas(e)},n.loadLayoutDatas=function(e){var t="../../../mock/department/"+e+".json";fetch(t+=e?"?depart="+e:"").then(function(e){return e.json()}).then(function(e){return n.setState({layout:e.data})})},n.render=function(){var e=n.state.layout;return a.default.createElement(r.default,{style:{minHeight:"100vh"}},a.default.createElement(u,{theme:"light",width:"256"},a.default.createElement(l.default,{type:"module",onClick:n.handleMenuClick,onLoad:function(e){return n.loadLayoutDatas(e)}})),a.default.createElement(r.default,null,a.default.createElement(s.default,{layout:e,onDelete:function(e){return n.setState({layout:e})}})))},n.state={layout:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=c},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(34)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n(56);var a=n(1),l=s(a);function s(e){return e&&e.__esModule?e:{default:e}}n(215);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));u.call(n);var r=e.title;return n.state={title:r,propertyBoardVisible:!1,propertyBoardDataSource:{}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}(),u=function(){var e=this;this.componentDidMount=function(){},this.handleOnDelete=function(t){var n=e.props.onDelete,r=e.props["data-grid"]||{};e.preventBubble(t),n&&n(r)},this.handleOnEdit=function(t){var n=e.props,r=n.style,o=n.onEdit,a=e.props["data-grid"]||{};e.preventBubble(t),e.setState({propertyBoardVisible:!0,propertyBoardDataSource:{title:a.title||"",style:r}},function(){o&&o(!0)})},this.preventBubble=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},this.handleDrawerOnClose=function(t){var n=e.props.onEdit;e.setState({propertyBoardVisible:t},function(){n&&n(t)})},this.render=function(){var t=e.props,n=t.children,a=t.isEdit,s=t.isDelete,i=t.type,u=void 0===i?"component":i,c=t.onClick,f=(t.style,e.state.title),d=l.default.createElement(r.default,{type:"edit",theme:"outlined",className:"operation",onMouseDown:e.handleOnEdit}),p=l.default.createElement(r.default,{type:"delete",theme:"outlined",className:"operation",onMouseDown:e.handleOnDelete}),h=l.default.createElement("div",{style:{height:30,background:"#f5f6fa"}},l.default.createElement("div",{className:"operate-button-group"},s&&p,a&&d),"add"!=u&&l.default.createElement("span",{className:"operation-title"},f)),m=Object.assign({},e.props);return delete m.getDrawerStatus,delete m.isDelete,delete m.onDelete,delete m.onEdit,delete m.isEdit,delete m.title,l.default.createElement("div",o({},m,{className:"Shell"+("component"!=u?" border-transition":""),onClick:function(e){return"add"==u&&c&&c(e)}}),h,n)}};t.default=i},215:function(e,t,n){var r=n(216);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(33)(r,o);r.locals&&(e.exports=r.locals)},216:function(e,t,n){(e.exports=n(32)(!1)).push([e.i,".Shell .operation {\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    float: right;\r\n}\r\n\r\n.Shell .operation-title {\r\n    font-family: MicrosoftYaHei;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: 1px;\r\n    color: #171717;\r\n    padding-left: 10px;\r\n}\r\n\r\n.Shell {\r\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n}\r\n\r\n.Shell:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.border-transition:hover {\r\n    border: 1px dashed #1890ff;\r\n}\r\n\r\n.border-transition {\r\n    border: 1px dashed #d9d9d9;\r\n}",""])},217:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(34)),o=i(n(62));n(56),n(66);var a=n(1),l=i(a),s=i(n(218));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.SubMenu,c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n.loadMenuDatas(),n.loadShellStyleDatas()},n.loadMenuDatas=function(){var e=n.props.type;fetch("../../../mock/"+("component"==(void 0===e?"component":e)?"menuDatas":"departmentDatas")+".json").then(function(e){return e.json()}).then(function(e){var t=e.data,r=n.props.onLoad,o=n.handleMenuGroup(t),a=0!=o.length?[o[0].group]:[];r&&r(a),n.setState({menuDatas:o,openKeys:a,selectedKeys:[n.menuSelectPrefix+a[0]]})})},n.loadShellStyleDatas=function(){fetch("../../../mock/shellStyleDatas.json").then(function(e){return e.json()}).then(function(e){0!=e.data.length&&n.setState({shellStyleDatas:e.data,currentShellStyle:e.data[0].style})})},n.handleMenuGroup=function(e){var t=[],n=[],r=[],o=!0,a=!1,l=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done);o=!0){var u=s.value,c=u.group,f=u.groupName;r.push(JSON.stringify({group:c,groupName:f}))}}catch(e){a=!0,l=e}finally{try{!o&&i.return&&i.return()}finally{if(a)throw l}}r=Array.from(new Set(r));var d=!0,p=!1,h=void 0;try{for(var m,y=r[Symbol.iterator]();!(d=(m=y.next()).done);d=!0){var j=m.value;n.push(JSON.parse(j))}}catch(e){p=!0,h=e}finally{try{!d&&y.return&&y.return()}finally{if(p)throw h}}var b=!0,v=!1,g=void 0;try{for(var w,O=n[Symbol.iterator]();!(b=(w=O.next()).done);b=!0){var E=w.value,_=(c=E.group,{groupName:f=E.groupName,group:c,children:[]}),S=!0,k=!1,x=void 0;try{for(var D,M=e[Symbol.iterator]();!(S=(D=M.next()).done);S=!0){var C=D.value;C.group==c&&_.children.push(C)}}catch(e){k=!0,x=e}finally{try{!S&&M.return&&M.return()}finally{if(k)throw x}}t.push(_)}}catch(e){v=!0,g=e}finally{try{!b&&O.return&&O.return()}finally{if(v)throw g}}return t},n.handleMenuClick=function(e){e.item;var t=e.key,r=(e.keyPath,n.props.onClick);r&&r(t.split(n.menuSelectPrefix)[1]),n.setState({selectedKeys:[t]})},n.handleOnBack=function(e){location.hash="/edit/module",window._acrossDatas=Object.assign({},window._acrossDatas,{componentToModule:{isComponentSave:!0,data:{}},moduleToComponent:{data:{}}})},n.handleOnOpenChange=function(e){return n.setState({openKeys:e})},n.handleShellStyle=function(e){return n.setState({currentShellStyle:e})},n.render=function(){var e=n.props.type,t=void 0===e?"component":e,a=n.state,i=a.menuDatas,c=a.openKeys,f=a.shellStyleDatas,d=a.currentShellStyle,p={openKeys:c,selectedKeys:a.selectedKeys,mode:"inline",onOpenChange:n.handleOnOpenChange,onClick:n.handleMenuClick},h=l.default.createElement("span",null,l.default.createElement(r.default,{type:"retweet",theme:"outlined"}),l.default.createElement("span",null,"样式选择")),m=l.default.createElement(o.default.Item,{key:"back",onClick:n.handleOnBack},l.default.createElement(r.default,{type:"arrow-left",theme:"outlined"}),l.default.createElement("span",null,"保存并返回")),y=l.default.createElement(o.default.Item,{key:"back",onClick:function(){return location.hash="/display"}},l.default.createElement(r.default,{type:"arrow-right",theme:"outlined"}),l.default.createElement("span",null,"首页")),j=l.default.createElement(o.default,null,"component"==t&&m,l.default.createElement(u,{title:h},f.map(function(e,t){var r=e.thumbnailColor,a=e.text,s=e.style;return l.default.createElement(o.default.Item,{key:"shellStyle"+t,onClick:function(){return n.handleShellStyle(s)}},l.default.createElement("div",{style:{width:10,height:10,marginRight:10,background:r,display:"inline-block"}}),l.default.createElement("span",{style:{userSelect:"none"}},a))})));return l.default.createElement("div",{className:"DraggableMenu"},"component"==t&&j,l.default.createElement(o.default,p,"module"==t&&y,i.map(function(e){var t=e.groupName,n=e.children,o=void 0===n?[]:n,a=e.group,i=l.default.createElement("span",null,l.default.createElement(r.default,{type:"laptop",theme:"outlined"}),l.default.createElement("span",null,t));return l.default.createElement(u,{key:a,title:i},o.map(function(e){return l.default.createElement(s.default,{key:"dragMenuItem"+e.key,item:Object.assign({},e,{style:d})})}))})))},n.state={menuDatas:[],openKeys:[],shellStyleDatas:[],currentShellStyle:{}},n.menuSelectPrefix="dragMenuItem",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}();t.default=c},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(62));n(66);var o=n(1),a=l(o);function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,i=Array(l),u=0;u<l;u++)i[u]=arguments[u];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleDragStart=function(e,t){e.dataTransfer.setData("menuItemToGrid",JSON.stringify(t))},o.render=function(){var e=o.props.item,t=e.draggable,n=void 0===t||t,l=e.text,s=e.key,i=(e.url,{key:s,draggable:n,onDragStart:function(t){return o.handleDragStart(t,e)}});return a.default.createElement(r.default.Item,Object.assign({},o.props,i),l)},s(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=i},219:function(e,t,n){var r=n(220);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(33)(r,o);r.locals&&(e.exports=r.locals)},220:function(e,t,n){(e.exports=n(32)(!1)).push([e.i,".Navigation {\r\n    background: #2e7df3;\r\n    box-shadow: 0px 0px 9px 0px rgba(39, 93, 214, 0.39);\r\n}\r\n\r\n.Navigation .content {\r\n    height: 65px;\r\n    background-color: #2e7df3;\r\n    box-shadow: 0px 0px 9px 0px rgba(39, 93, 214, 0.39);\r\n}\r\n\r\n.Navigation .content .content-wrapper {\r\n    font-family: MicrosoftYaHeiLight;\r\n    font-size: 28px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: 1px;\r\n    color: #ffffff;\r\n    float: left;\r\n    height: 100%;\r\n    line-height: 65px;\r\n    text-align: center;\r\n}\r\n\r\n.Navigation .content .content-space {\r\n    width: 1px;\r\n    height: 100%;\r\n    background: #2372e7;\r\n    float: left;\r\n}\r\n\r\n.Navigation .content .content-time {\r\n    font-family: MicrosoftYaHeiLight;\r\n    font-size: 34px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: 0px;\r\n    color: #ffffff;\r\n}\r\n\r\n.Navigation .content .content-time-detail {\r\n    height: 24px;\r\n\tfont-family: MicrosoftYaHei;\r\n\tfont-size: 13px;\r\n\tfont-weight: normal;\r\n\tfont-stretch: normal;\r\n\tline-height: 33px;\r\n\tletter-spacing: 0px;\r\n\tcolor: #ffffff;\r\n}",""])},264:function(e,t,n){var r={"./af":68,"./af.js":68,"./ar":69,"./ar-dz":70,"./ar-dz.js":70,"./ar-kw":71,"./ar-kw.js":71,"./ar-ly":72,"./ar-ly.js":72,"./ar-ma":73,"./ar-ma.js":73,"./ar-sa":74,"./ar-sa.js":74,"./ar-tn":75,"./ar-tn.js":75,"./ar.js":69,"./az":76,"./az.js":76,"./be":77,"./be.js":77,"./bg":78,"./bg.js":78,"./bm":79,"./bm.js":79,"./bn":80,"./bn.js":80,"./bo":81,"./bo.js":81,"./br":82,"./br.js":82,"./bs":83,"./bs.js":83,"./ca":84,"./ca.js":84,"./cs":85,"./cs.js":85,"./cv":86,"./cv.js":86,"./cy":87,"./cy.js":87,"./da":88,"./da.js":88,"./de":89,"./de-at":90,"./de-at.js":90,"./de-ch":91,"./de-ch.js":91,"./de.js":89,"./dv":92,"./dv.js":92,"./el":93,"./el.js":93,"./en-au":94,"./en-au.js":94,"./en-ca":95,"./en-ca.js":95,"./en-gb":96,"./en-gb.js":96,"./en-ie":97,"./en-ie.js":97,"./en-il":98,"./en-il.js":98,"./en-nz":99,"./en-nz.js":99,"./eo":100,"./eo.js":100,"./es":101,"./es-do":102,"./es-do.js":102,"./es-us":103,"./es-us.js":103,"./es.js":101,"./et":104,"./et.js":104,"./eu":105,"./eu.js":105,"./fa":106,"./fa.js":106,"./fi":107,"./fi.js":107,"./fo":108,"./fo.js":108,"./fr":109,"./fr-ca":110,"./fr-ca.js":110,"./fr-ch":111,"./fr-ch.js":111,"./fr.js":109,"./fy":112,"./fy.js":112,"./gd":113,"./gd.js":113,"./gl":114,"./gl.js":114,"./gom-latn":115,"./gom-latn.js":115,"./gu":116,"./gu.js":116,"./he":117,"./he.js":117,"./hi":118,"./hi.js":118,"./hr":119,"./hr.js":119,"./hu":120,"./hu.js":120,"./hy-am":121,"./hy-am.js":121,"./id":122,"./id.js":122,"./is":123,"./is.js":123,"./it":124,"./it.js":124,"./ja":125,"./ja.js":125,"./jv":126,"./jv.js":126,"./ka":127,"./ka.js":127,"./kk":128,"./kk.js":128,"./km":129,"./km.js":129,"./kn":130,"./kn.js":130,"./ko":131,"./ko.js":131,"./ky":132,"./ky.js":132,"./lb":133,"./lb.js":133,"./lo":134,"./lo.js":134,"./lt":135,"./lt.js":135,"./lv":136,"./lv.js":136,"./me":137,"./me.js":137,"./mi":138,"./mi.js":138,"./mk":139,"./mk.js":139,"./ml":140,"./ml.js":140,"./mn":141,"./mn.js":141,"./mr":142,"./mr.js":142,"./ms":143,"./ms-my":144,"./ms-my.js":144,"./ms.js":143,"./mt":145,"./mt.js":145,"./my":146,"./my.js":146,"./nb":147,"./nb.js":147,"./ne":148,"./ne.js":148,"./nl":149,"./nl-be":150,"./nl-be.js":150,"./nl.js":149,"./nn":151,"./nn.js":151,"./pa-in":152,"./pa-in.js":152,"./pl":153,"./pl.js":153,"./pt":154,"./pt-br":155,"./pt-br.js":155,"./pt.js":154,"./ro":156,"./ro.js":156,"./ru":157,"./ru.js":157,"./sd":158,"./sd.js":158,"./se":159,"./se.js":159,"./si":160,"./si.js":160,"./sk":161,"./sk.js":161,"./sl":162,"./sl.js":162,"./sq":163,"./sq.js":163,"./sr":164,"./sr-cyrl":165,"./sr-cyrl.js":165,"./sr.js":164,"./ss":166,"./ss.js":166,"./sv":167,"./sv.js":167,"./sw":168,"./sw.js":168,"./ta":169,"./ta.js":169,"./te":170,"./te.js":170,"./tet":171,"./tet.js":171,"./tg":172,"./tg.js":172,"./th":173,"./th.js":173,"./tl-ph":174,"./tl-ph.js":174,"./tlh":175,"./tlh.js":175,"./tr":176,"./tr.js":176,"./tzl":177,"./tzl.js":177,"./tzm":178,"./tzm-latn":179,"./tzm-latn.js":179,"./tzm.js":178,"./ug-cn":180,"./ug-cn.js":180,"./uk":181,"./uk.js":181,"./ur":182,"./ur.js":182,"./uz":183,"./uz-latn":184,"./uz-latn.js":184,"./uz.js":183,"./vi":185,"./vi.js":185,"./x-pseudo":186,"./x-pseudo.js":186,"./yo":187,"./yo.js":187,"./zh-cn":188,"./zh-cn.js":188,"./zh-hk":189,"./zh-hk.js":189,"./zh-tw":190,"./zh-tw.js":190};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=264},380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(381));n(394);var o=n(1),a=u(o),l=n(252),s=u(n(214)),i=u(n(399));function u(e){return e&&e.__esModule?e:{default:e}}n(477);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleOnAdd=function(e){n.setState({modalVisible:!0})},n.handleShellOnDelete=function(e){var t=e.key,r=n.props,o=r.layout,a=r.onDelete;a&&a((0,l.reject)(o,{key:t}))},n.handleModalOnOk=function(e){n.setState({modalVisible:!1},function(){location.hash="/edit/component",window._acrossDatas=Object.assign({},window._acrossDatas,{moduleToComponent:{data:n.modalFormDatas},status:"pending"})})},n.handleShellonEdit=function(e,t){n.setState({modalVisible:e,currentModalItem:t})},n.render=function(){var e=n.props.layout,t=n.state,o=t.modalVisible,l=t.currentModalItem,u={zIndex:1,userSelect:"none",width:"20%",height:200,background:"#e0e6ee",borderRadius:2,transition:"all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",float:"left",margin:30},c={title:"套餐设置",visible:o,onCancel:function(){return n.setState({modalVisible:!o})},cancelText:"取消",destroyOnClose:!0,okText:"确定",onOk:n.handleModalOnOk};return a.default.createElement("div",{className:"ModuleLayout"},e.map(function(e){var t=e.key,r=e.title,o=e.isEdit,l=e.imgUrl,i={key:t,title:r,isEdit:o,isDelete:e.isDelete,type:"module","data-grid":e,style:u,onDelete:n.handleShellOnDelete,onEdit:function(t){return n.handleShellonEdit(t,e)}};return a.default.createElement(s.default,i,a.default.createElement("img",{src:l,style:{width:"100%",height:"calc(100% - 30px)"}}))}),a.default.createElement(s.default,{key:"add",style:Object.assign({},u,{display:"flex",alignItems:"center",justifyContent:"center"}),type:"add",onClick:n.handleOnAdd},a.default.createElement("i",{className:"plus-icon"},"+")),a.default.createElement(r.default,c,a.default.createElement(i.default,{onChange:function(e){return n.modalFormDatas=e},currentModalItem:l})))},n.state={modalVisible:!1,currentModalItem:{}},n.modalFormDatas={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=c},399:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(270)),o=i(n(404)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n(279),n(471);var l=n(1),s=i(l);function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.Item,c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n.setDefaultValueOfInput()},n.setDefaultValueOfInput=function(){var e=n.props,t=e.form,r=e.currentModalItem;(0,t.setFields)({title:{value:r.title,error:null},imgUrl:{value:r.imgUrl,error:null}})},n.handleOnChange=function(e){var t=n.props,r=t.onChange,o=t.form;e.preventDefault(),o.validateFieldsAndScroll(function(e,t){e||r&&r(t)})},n.render=function(){var e=n.props.form.getFieldDecorator,t={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16}}};return s.default.createElement("div",{className:"PropertyForm"},s.default.createElement(o.default,{onSubmit:n.handleSubmit},s.default.createElement(u,a({},t,{label:"标题"}),e("title",{rules:[{required:!0,message:"请输入标题"}]})(s.default.createElement(r.default,{onBlur:n.handleOnChange}))),s.default.createElement(u,a({},t,{label:"缩略图地址"}),e("imgUrl",{rules:[{required:!0,message:"请输入像url的地址，比如http://www.github.com",type:"url"}]})(s.default.createElement(r.default,{onBlur:n.handleOnChange})))))},n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),t}();t.default=o.default.create()(c)},477:function(e,t,n){var r=n(478);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(33)(r,o);r.locals&&(e.exports=r.locals)},478:function(e,t,n){(e.exports=n(32)(!1)).push([e.i,".ModuleLayout .plus-icon {\r\n    line-height: 0.4;\r\n    font-size: 6em;\r\n    color: #bcc3cb;\r\n    height: 54px;\r\n}\r\n\r\n.ModuleLayout {\r\n    background: #f5f6fa;\r\n    height: 100%;\r\n}",""])},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=l(r),a=l(n(24));function l(e){return e&&e.__esModule?e:{default:e}}n(219),a.default.locale("zh-cn");var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n.getCurrentTime()},n.getCurrentTime=function(){setInterval(function(){n.setState({time:(0,a.default)().format("HH:mm:ss")})},1e3)},n.render=function(){var e=n.props.children,t=n.state.time;o.default.createElement("div",{className:"content-space"});return o.default.createElement("div",{className:"Navigation"},o.default.createElement("div",{className:"content"},o.default.createElement("div",{className:"content-wrapper",style:{width:300}},"浙江省水利综合门户"),o.default.createElement("div",{className:"content-wrapper",style:{width:300}},o.default.createElement("div",{className:"content-time"},t)),o.default.createElement("div",{className:"content-wrapper"},o.default.createElement("div",{className:"content-time-detail"},(0,a.default)().format("YYYY-MM-DD")),o.default.createElement("div",{className:"content-time-detail"},(0,a.default)().format("dddd")))),e)},n.state={time:(0,a.default)().format("HH:mm:ss")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=s}}]);