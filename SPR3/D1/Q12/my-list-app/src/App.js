import React from 'react';

function App() {
  const topics = ['React', 'JavaScript', 'CSS'];

  return (
    <div style={styles.container}>
      <h1>My Favorite Web Topics</h1>
      <ul>
        {topics.map((item, index) => (
          <li key={index} style={styles.item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
  },
  item: {
    fontSize: '18px',
    margin: '8px 0',
  }
};

export default App;
