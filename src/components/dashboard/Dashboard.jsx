import React from 'react';
import style from './Dashboard.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Dashboard = () => (
  <div className="Dashboard">This is Dashboard</div>
);

export default withStyles(style)(Dashboard);
