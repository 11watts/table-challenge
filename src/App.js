import React from 'react';
import './App.css';
import PersonTable from './componets/PersonTable';

const fakeData = [
  { firstname: 'Even', lastname: 'Feenstra', age: 30 },
  { firstname: 'Joe', lastname: 'Shmoe', age: 31 },
  { firstname: 'Josh', lastname: 'Aharonoff', age: 30 }
];

function App() {
  return (
    <div style={{ width: '480px', paddingTop: '100px', margin: 'auto' }}>
      <h2>Person Table</h2>
      <PersonTable people={fakeData} />
    </div>
  );
}

export default App;
