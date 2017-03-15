import React from 'react';

class Items extends React.Component {

  render() {
    const listItems = this.props.tasks.map((item) => {
      return <li key={ item.id.toString() }> { item.content } </li>
    });
    return (
      <div>
        <ul>{ listItems }</ul>
      </div>
    )
  }
}


export default Items;
