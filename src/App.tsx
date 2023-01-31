import React from 'react';
import { Toaster } from 'react-hot-toast';
import Router from './router/Router';

function App() {
  return (
    <>
      <Router />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
