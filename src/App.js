import React, { Component } from 'react';

//Component
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

//CSS
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = ({
      data: [
        { content: 'Đi đá bóng', isShow: true },
        { content: 'Đi xem phim', isShow: true },
        { content: 'Đi chơi với người yêu', isShow: false },
        { content: 'Đi học lập trình', isShow: true },
        { content: 'Đi làm web front-end', isShow: false }
      ],
      check: false,
      list: []
    })

    this.addToDo = this.addToDo.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onClickDelete = this.onClickDelete.bind(this)
    this.onCheckAll = this.onCheckAll.bind(this)
    this.onShowAll = this.onShowAll.bind(this)
    this.onShowCheck = this.onShowCheck.bind(this)
    this.onShowNotCheck = this.onShowNotCheck.bind(this)
  }

  addToDo(todo) {
    const { data } = this.state;
    if (todo) {
      this.setState({
        data: [
          ...data,
          todo
        ]
      })
    }
  };

  onClick(item) {
    const { data } = this.state;
    const index = data.indexOf(item)
    this.setState({
      data: [
        ...data.slice(0, index),
        {
          ...item, isShow: !item.isShow
        },
        ...data.slice(index + 1)
      ]
    });
  }

  onClickDelete(item) {
    const { data } = this.state;
    const index = data.indexOf(item)
    this.setState({
      data: [
        ...data.slice(0, index),
        ...data.slice(index + 1)
      ]
    })
  }

  onCheckAll() {
    const { data: list } = this.state;
    list.map(item => {
      if (item.isShow) {
        item.isShow = false;
      }
    });
    this.setState({
      data: list
    })
  }

  onShowAll() {
    const { check } = this.state;
    this.setState({
      check: false
    })
  };

  onShowCheck() {
    const { data } = this.state;
    this.setState({
      check: true,
      list: data.filter(item => {
        return item.isShow === false;
      })
    })
  }

  onShowNotCheck() {
    const { data } = this.state;
    this.setState({
      check: true,
      list: data.filter(item => {
        return item.isShow === true;
      })
    })
  };

  render() {
    const { data, list, check } = this.state;
    return (
      <div className="App">
        <div className="container w-50">
          <Header addToDo={this.addToDo} />
          <TodoList
            data={data}
            onShowCheck={this.onShowCheck}
            check={this.check}
            onClick={this.onClick}
            onClickDelete={this.onClickDelete}
            check={check}
            list={list}
          />
          <Footer
            length={(check ? list : data).length}
            onCheckAll={this.onCheckAll}
            onShowAll={this.onShowAll}
            onShowCheck={this.onShowCheck}
            onShowNotCheck={this.onShowNotCheck}
          />
        </div>
      </div>
    );
  }
}

export default App;
