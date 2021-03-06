// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/global.css';
import GlobalModal from './component/GlobalModal';
import Router from './router';
import Store from './localStorage';
import GlobalListener from './localStorage/GlobalListener';

const MOUNT_NODE: HTMLElement | null = document.getElementById('root');

const getSize = (clientWidth: number) => (clientWidth <= 1366 ? 'sm' : '');

new Store(null, (store: any) => {
  let subscriber: Array<any> = [];
  // 控制内部组件自适应
  const resize = (target = window as any) => {
    const { innerWidth, innerHeight } = target;
    const { clientWidth, clientHeight } =
      document.documentElement || document.body;
    const sizes = {
      innerWidth,
      innerHeight,
      clientWidth,
      clientHeight,
    };

    for (let item of subscriber) {
      const { onResize, key } = item;
      const listenItem = SCTool.listener.get(key);
      let params = {
        key,
        size: getSize(sizes.clientWidth),
        ...sizes,
      };

      if (listenItem) {
        const { width, height } = listenItem;

        params = Object.assign({}, params, {
          width: parseFloat(width.replace('px', '')),
          height: parseFloat(height.replace('px', '')),
        });
      }

      // 分发插件各自宽高
      onResize && onResize(params);
    }

    return sizes;
  };

  (window as any).SCTool = {};
  (window as any).SCTool.modal = {};
  (window as any).SCTool.store = store;
  (window as any).SCTool.listener = new GlobalListener();
  (window as any).SCTool.resize = resize;

  (window as any).onresize = (e: any) => {
    if (subscriber.length != 0) {
      // onresize 执行到这里时，Grid 渲染尚未完成
      setTimeout(() => {
        resize();
      }, 1);
    }
  };

  Object.defineProperty((window as any).SCTool, 'RegisterResizeDispatcher', {
    enumerable: true,
    configurable: true,
    set: value => {
      subscriber.push(value);

      return;
    },
  });

  for (let key of Object.keys(store.get('meta'))) {
    (window as any).SCTool.listener.set(key, store.get('meta')[key]);
  }

  ReactDOM.render(
    <React.Fragment>
      <GlobalModal on={(window as any).SCTool} />
      <Router />
    </React.Fragment>,
    MOUNT_NODE,
  );
});
