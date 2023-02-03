import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import Router from './router/Router';

function App() {
  return (
    <>
      <Router />
      <Toaster position="top-right" />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </>
  );
}

export default App;
