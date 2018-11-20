import React, {Component} from 'react';

class Item extends Component {
  render() {
    return (
      <div className="todo-item">
        {this.props.text} <button onClick={this.props.delete}>x</button>
      </div>
    );
  }
}

export default Item;
