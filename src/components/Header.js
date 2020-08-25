import React, { memo, useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const Header = memo(props => {
  const [text, setText] = useState('');
  const onChange = e => {
    setText(e.target.value)
  }

  const { addToDo } = props;

  const addToDoItem = () => {
    addToDo({
      content: text,
      isShow: true
    })
    setText('');
  }

  return (
    <header>
      <h1 className="display-4 text-monospace text-center">Todo List App </h1>
      <InputGroup>
        <Input value={text} onChange={onChange} />
        <InputGroupAddon addonType="append">
          <Button color="primary" onClick={addToDoItem}>New Item</Button>
        </InputGroupAddon>
      </InputGroup>
    </header>
  );
})

export default Header;

