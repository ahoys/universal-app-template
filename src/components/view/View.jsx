import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './View.scss';

const View = ({ children }) => (
  <div className="View">
    { children }
  </div>
);

export default withStyles(style)(View);
