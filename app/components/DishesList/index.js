// import React from 'react';
// import PropTypes from 'prop-types';
// import { Icon, Layout, Menu, Dropdown } from 'antd';
//
// const { Sider } = Layout;
// const { SubMenu } = Menu;
// const menu = (
//   <Menu>
//     <Menu.Item key="1">Edit</Menu.Item>
//     <Menu.Item key="2">Add</Menu.Item>
//   </Menu>
// );
//
// const DishesList = ({ dishes, setCurrentDish }) => (
//   <Sider width="30%" style={{ background: '#fff' }}>
//     {dishes.types ? (
//       <Menu mode="inline" style={{ height: '100%' }} onSelect={setCurrentDish}>
//         {dishes.types.allIds.map(typesId => (
//           <SubMenu
//             key={typesId}
//             title={
//               <span>
//                 <Icon type="database" />
//                 {dishes.types.byId[typesId].name}
//                 <Dropdown overlay={menu}>
//                   <span
//                     style={{ marginLeft: '30px' }}
//                     className="ant-dropdown-link"
//                   >
//                     Settings <Icon style={{ fontSize: '16px' }} type="edit" />
//                   </span>
//                 </Dropdown>
//               </span>
//             }
//           >
//             {dishes.types.byId[typesId].subTypes.length === 0
//               ? dishes.types.byId[typesId].dishes.map(dishId => (
//                   <Menu.Item key={dishId}>
//                     {dishes.dishes.byId[dishId].name}
//                   </Menu.Item>
//                 ))
//               : dishes.types.byId[typesId].subTypes.map(subTypeId => (
//                   <SubMenu
//                     key={subTypeId}
//                     title={
//                       <span>
//                         <Icon type="database" />
//                         {dishes.subTypes.byId[subTypeId].name}
//                         <Dropdown overlay={menu}>
//                           <span
//                             style={{ marginLeft: '30px' }}
//                             className="ant-dropdown-link"
//                           >
//                             Settings
//                             <Icon style={{ fontSize: '16px' }} type="edit" />
//                           </span>
//                         </Dropdown>
//                       </span>
//                     }
//                   >
//                     {dishes.subTypes.byId[subTypeId].dishes.map(dishId => (
//                       <Menu.Item key={dishId}>
//                         {dishes.dishes.byId[dishId].name}
//                       </Menu.Item>
//                     ))}
//                   </SubMenu>
//                 ))}
//           </SubMenu>
//         ))}
//       </Menu>
//     ) : (
//       <div>List of dish is empty.</div>
//     )}
//   </Sider>
// );
//
// DishesList.propTypes = {
//   dishes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//   setCurrentDish: PropTypes.func,
// };
//
// export default DishesList;
