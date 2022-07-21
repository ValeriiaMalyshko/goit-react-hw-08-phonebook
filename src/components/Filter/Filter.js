import React from 'react';
// import PropTypes from 'prop-types';
import s from './Filter.module.css';
// import { connect } from 'react-redux';
import { changeFilter } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
