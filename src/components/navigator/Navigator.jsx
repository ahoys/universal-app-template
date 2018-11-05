import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './Navigator.scss';

const Navigator = ({ children }) => (
  <div className="Navigator">
    { children }
  </div>
);

export default withStyles(style)(Navigator);
