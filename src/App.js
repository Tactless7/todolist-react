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
  };

  addNewTask = (task) => {
    let newItems = Object.assign([], this.state.items);
    newItems.push(task);

    this.setState({
      items : newItems
    });
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
