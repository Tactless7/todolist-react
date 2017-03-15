import React from 'react';
import Items from './Items';
import ItemInput from './ItemInput';

class App extends React.Component {
  render() {
    return (
      <div>
        <ItemInput />
        <Items />
      </div>
    );
  }
}

export default App;
