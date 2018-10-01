/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Layout, Menu, Icon, Spin } from 'antd';
import {
  makeSelectDishes,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { loadDishes, setCurrentDish } from '../App/actions';
import DishesList from '../../components/DishesList';

const { Header, Footer, Content } = Layout;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.loadDishes();
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">Home</Menu.Item>
          </Menu>
        </Header>
        {this.props.loading ? (
          <Spin indicator={antIcon} />
        ) : (
          <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <DishesList
                dishes={this.props.dishes}
                setCurrentDish={this.props.setCurrentDish}
              />
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                Options of current dish
              </Content>
            </Layout>
          </Content>
        )}
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  loadDishes: PropTypes.func,
  setCurrentDish: PropTypes.func,
  dishes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadDishes: event => {
      if (event !== undefined && event.preventDefault) event.preventDefault();
      dispatch(loadDishes());
    },
    setCurrentDish: ({ key, domEvent }) => {
      if (domEvent !== undefined && domEvent.preventDefault)
        domEvent.preventDefault();
      dispatch(setCurrentDish(key));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  dishes: makeSelectDishes(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect,
)(HomePage);
