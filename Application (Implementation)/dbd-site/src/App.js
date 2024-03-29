// App.js
import React from 'react';
import PageRoutes from './PageRoutes';
import Home from './components/Home';

const App = () => {
  return (
    <NextUIProvider>
      <PageRoutes/>
      <Home/>
    </NextUIProvider>
  );
};

export default App;
