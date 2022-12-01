import React from 'react';
import './App.css';
const RemoteHello = React.lazy(() => import('remote/Hello'));


function App() {
  return (
    <div className="App">
      hello, this is application
      <RemoteHello />
    </div>
  );
}

export default App;
