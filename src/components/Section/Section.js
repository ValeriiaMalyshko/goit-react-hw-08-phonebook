import React from 'react';
import propTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ text, children }) {
  return (
    <div className={s.container}>
      <h2 className={s.text}>{text}</h2>
      <div>{children}</div>
    </div>
  );
}

Section.propTypes = {
  text: propTypes.string.isRequired,
  children: propTypes.element,
};
