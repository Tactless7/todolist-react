import React from 'react';

class ItemInput extends React.Component {
  
  handleSubmit = (event) =>{
    event.preventDefault();

    const newItemContent = this.itemInput.value;
    const newItem = {
      id : Date.now(),
      content : newItemContent
    }
    console.log(newItem.content);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="item">Ajouter une tâche : </label>
        <input type="text" name="item" ref={ (input) => {this.itemInput = input} }/>
        <button type="submit">Ajouter</button>
      </form>
    )
  }
}

export default ItemInput;
