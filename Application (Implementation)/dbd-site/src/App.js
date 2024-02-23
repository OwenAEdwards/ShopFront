// App.js
import React from 'react';
import PageRoutes from './PageRoutes';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <PageRoutes/>
      <Home/>
    </div>
  );
};

export default App;
