import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './Content.scss';

const Content = ({ children }) => (
  <div className="Content">
    { children }
  </div>
);

export default withStyles(style)(Content);
