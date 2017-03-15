import React from 'react';
import Items from './Items';
import ItemInput from './ItemInput';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items : [
        {
          id : 1,
          content : 'Passer l\'aspirateur'
        },
        {
          id : 2,
          content : 'Laver la vaisselle'
        }
      ]
    };
  }

  addNewTask = (task) => {
    console.log(task);
  }


  render() {
    return (
      <div>
        <ItemInput onNewTask={ this.addNewTask } />
        <Items tasks={this.state.items}/>
      </div>
    );
  }
}

export default App;
