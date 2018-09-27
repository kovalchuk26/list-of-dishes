/**
 * Asynchronously loads the component for HomePage
 */
import React from 'react';
import Loadable from 'react-loadable';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export default Loadable({
  loader: () => import('./index'),
  loading: () => <Spin indicator={antIcon} />,
});
