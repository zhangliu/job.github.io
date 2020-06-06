import React from 'react';

const params  = new URLSearchParams(window.location.search);
const pageName = params.get('page') || 'index';

const Page = React.lazy(() => import(`./pages/${pageName}`));

function App() {
  return (
    <React.Suspense fallback={<div className="ta:c mt:20">加载中...</div>}>
      <Page />
    </React.Suspense>
  );
}

export default App;
