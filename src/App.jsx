import React from 'react';

const params  = new URLSearchParams(window.location.search);
const pageIndex = params.get('page') || '1';

const Page = React.lazy(() => import(`./pages/page${pageIndex}`));

function App() {
  return (
    <React.Suspense fallback={<div className="ta:c mt:20">加载中...</div>}>
      <Page />
    </React.Suspense>
  );
}

export default App;
