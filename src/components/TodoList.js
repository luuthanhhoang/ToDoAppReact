import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import checkImg from '../images/check.svg';
import checkdone from '../images/checkdone.svg';
import '../css/TodoList.css'

export default class TodoList extends Component {

  constructor() {
    super();
  }

  render() {
    const { data,
      onClick,
      onClickDelete,
      check,
      list } = this.props;
    return (
      <Table onChange={this.onChange}>
        <thead>
          <tr>
            <th>Check</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {check ?
            list.map((item, index) =>
              <tr className={!item.isShow ? 'active' : ''} key={index}>
                <th>
                  <img src={!item.isShow ? checkdone : checkImg} alt={item.content}
                    width={30} height={30} />
                </th>
                <td>{item.content}</td>
                <td>
                  <Button color="danger">Delete</Button>{' '}
                </td>
              </tr>
            ) :
            data.map((item, index) =>
              <tr className={!item.isShow ? 'active' : ''} key={index}>
                <th>
                  <img src={!item.isShow ? checkdone : checkImg} alt={item.content}
                    width={30} height={30} onClick={() => onClick(item)} />
                </th>
                <td>{item.content}</td>
                <td>
                  <Button color="danger" onClick={() => onClickDelete(item)}>Delete</Button>{' '}
                </td>
              </tr>
            )}
        </tbody>
      </Table>
    )
  }
}