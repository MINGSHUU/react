import React from 'react'

class TodoItem extends React.Component {

  // 子组件如果想要和父组件通信，子组件要调用父组件传递过来的方法

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }

  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleDelete}>{content}</div>
    )
  }

}

export default TodoItem;