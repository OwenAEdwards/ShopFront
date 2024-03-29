// App.js
import React from 'react';
import PageRoutes from './PageRoutes';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <PageRoutes/>
      <Home/>
    </div>
  );
};

export default App;
