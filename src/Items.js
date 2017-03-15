import React from 'react';

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
  render() {
    const listItems = this.state.items.map((item) => {
      return <li key={ item.id.toString() }> { item.content } </li>
    });
    return (
      <ul>{ listItems }</ul>
    )
  }
}


export default Items;
