import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul style={{ backgroundColor: 'lightgrey', maxWidth: '40%', marginBottom: '20px' }}>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;