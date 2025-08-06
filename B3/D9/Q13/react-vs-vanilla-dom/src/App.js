import React from 'react';
import VanTitleUpdater from './components/VanillaUpdate';
import RctTitleUpdater from './components/ReactUpdate';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>React vs Vanilla DOM Updates</h1>
      <VanTitleUpdater />
      <hr />
      <RctTitleUpdater />
    </div>
  );
}

export default App;
