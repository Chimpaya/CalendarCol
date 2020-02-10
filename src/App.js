import React from 'react';
import ShareCalendar from './share-calendar'
function App() {
  return (
    <div style={{ height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <div style={{ height: '80%', width: '80%' }}>
        <ShareCalendar />
      </div>


    </div>
  );
}

export default App;
