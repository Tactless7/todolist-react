import React from 'react';
import ItemInput from './ItemInput';

class Items extends React.Component {
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
    }
  }

  addNewTask = (task) => {
    console.log(task);
  }

  render() {
    const listItems = this.state.items.map((item) => {
      return <li key={ item.id.toString() }> { item.content } </li>
    });
    return (
      <div>
        <ItemInput onNewTask={ this.addNewTask } />
        <ul>{ listItems }</ul>
      </div>
    )
  }
}


export default Items;
