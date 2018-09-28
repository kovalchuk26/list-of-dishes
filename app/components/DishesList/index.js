import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Layout, Menu, Button, Dropdown } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;
const menu = (
  <Menu>
    <Menu.Item key="1">Edit</Menu.Item>
    <Menu.Item key="2">Add</Menu.Item>
  </Menu>
);

const DishesList = ({ dishes }) => (
  <Sider width="30%" style={{ background: '#fff' }}>
    <Menu mode="inline" style={{ height: '100%' }}>
      {dishes.length !== 0 ? (
        dishes.map(dish => (
          <SubMenu
            key={dish.id}
            title={
              <span>
                <Icon type="database" />
                {dish.dish}
                <Dropdown overlay={menu}>
                  <span
                    style={{ marginLeft: '30px' }}
                    className="ant-dropdown-link"
                  >
                    Settings <Icon style={{ fontSize: '16px' }} type="edit" />
                  </span>
                </Dropdown>
              </span>
            }
          >
            {dish.types.map(
              type =>
                type.name === 'default' ? (
                  type.variants.map(variant => (
                    <Menu.Item key={variant.id}>{variant.title}</Menu.Item>
                  ))
                ) : (
                  <SubMenu
                    key={type.id}
                    title={
                      <span>
                        <Icon type="database" />
                        {type.name}
                      </span>
                    }
                  >
                    {type.variants.map(variant => (
                      <Menu.Item key={variant.id}>{variant.title}</Menu.Item>
                    ))}
                  </SubMenu>
                ),
            )}
          </SubMenu>
        ))
      ) : (
        <div>List of dishes is empty...</div>
      )}
    </Menu>
  </Sider>
);

DishesList.propTypes = {
  dishes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default DishesList;
