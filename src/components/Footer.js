import React, { memo } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Footer = memo(props => {
  const { length, onCheckAll, onShowAll, onShowCheck, onShowNotCheck } = props;

  console.log(length)

  return (
    <div className="Footer">
      <h5>Count: {length}</h5>
      <Button color="primary" onClick={onCheckAll}>Check All</Button>{' '}
      <ButtonGroup>
        <Button color="primary" onClick={onShowAll}>All</Button>
        <Button color="primary" onClick={onShowCheck}>Check</Button>
        <Button color="primary" onClick={onShowNotCheck}>Not check</Button>
      </ButtonGroup>
    </div>
  )

});

export default Footer;