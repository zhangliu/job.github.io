import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './layouts/index';

const params  = new URLSearchParams(window.location.search);
const jobIndex = params.get('job') || '1';

const Job = () => {
  const Component = React.lazy(() => import(`./jobs/job${jobIndex}`));
  return (
    <React.Suspense fallback={<div className="ta:c mt:20">加载中...</div>}>
      <Component />
    </React.Suspense>
  )
}

export default (
  <BrowserRouter>
    <Route path="/" component={() => <Layout><Job /></Layout>} />
  </BrowserRouter>
);