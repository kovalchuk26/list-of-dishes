import React from 'react';
import PropTypes from 'prop-types';

import { Table, Divider, Tag } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Price',
  dataIndex: 'price',
  key: 'price',
}, {
  title: 'Fillers',
  key: 'fillers',
  dataIndex: 'fillers',
  render: fillers => (
    <span>
      {fillers.map(filler => <Tag color="blue" key={filler}>{filler}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Add filler</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete filler</a>
    </span>
  ),
}];

const DishDetails = ({details}) => {
  const data = [{...details}].map(detail => ({ ...detail, key: detail.id }));

  return (<Table columns={columns} dataSource={data} pagination={false}/>)
};

DishDetails.propTypes = {
  details: PropTypes.object,
};

export default DishDetails
