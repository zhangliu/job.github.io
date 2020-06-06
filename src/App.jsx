import React from 'react';
import Loadable from 'react-loadable';

const params  = new URLSearchParams(window.location.search);
const pageName = params.get('page') || 'index';

const Page = Loadable({
  loader: () => import(`./pages/${pageName}`),
  loading: () => <div className="ta:c mt:20">加载中...</div>,
});

function App() {
  return (<Page />);
}

export default App;
