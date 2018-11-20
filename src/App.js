import React, {Component} from 'react';
import './App.css';

import Item from './components/todoItem';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todoText : "",
      allTodo:[]
    }

  }

  updateToDoText(todoText){
    this.setState({todoText:todoText.target.value})
  }

  deleteItem(index) {
    let allItems = this.state.allTodo;
    allItems.splice(index,1);
    this.setState({allTodo:allItems});
  }

  addItem() {
    if(this.state.todoText == "") {
      return
    }

    let allItems = this.state.allTodo;
    allItems.push(this.state.todoText);
    this.setState({todoText:""});
  }

  render() {

    let items = this.state.allTodo.map((value, index)=>{
      return <Item key={index} text={value}
                   delete={()=>{this.deleteItem(index)}}
      />
    });

    return (
      <div className="Container">
        <div className="header">
          React ToDo App
        </div>

        {items}

        <div className="btn" onClick={this.addItem.bind(this)}>+</div>
      <input type="text"
             className="textInput"
             value={this.state.todoText}
             onInput={newText => this.updateToDoText(newText)}
             placeholder="Enter ToDo Item"
      />

      </div>
    );
  }
}

export default App;
