import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { changeFilter } from '../../redux/filter-reducer';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Find contacts by name</InputGroup.Text>
      <Form.Control
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default Filter;
