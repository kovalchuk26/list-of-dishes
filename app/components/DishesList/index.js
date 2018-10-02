// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { Icon, Layout, Menu, Dropdown, Modal, Button } from 'antd';
// import {WrappedNormalLoginForm} from '../OptionsForm';
//
// const { Sider } = Layout;
// const { SubMenu } = Menu;
//
// class DishesList extends Component {
//   showModal() {
//     this.props.changeVisibleModal();
//   }
//
//   onClick({ key, domEvent }) {
//     domEvent.preventDefault();
//     console.log(`Click on item ${key}`);
//     this.showModal();
//   };
//
//   render() {
//     const { dishes, setCurrentDish, changeVisibleModal, visibleModal } = this.props;
//     const createMenu = (key, type) => (
//       <Menu onClick={this.onClick.bind(this)}>
//         <Menu.Item key={`edit-${type}-${key}`}>Edit</Menu.Item>
//         <Menu.Item key={`add-${type}-${key}`}>Add</Menu.Item>
//       </Menu>
//     );
//
//     return (
//       <Sider width="30%" style={{ background: '#fff' }}>
//         {dishes.types ? (
//           <Menu mode="inline" style={{ height: '100%' }} onSelect={setCurrentDish}>
//             {dishes.types.allIds.map(typesId => (
//               <SubMenu
//                 key={typesId}
//                 title={
//                   <span>
//                     {dishes.types.byId[typesId].name}
//                     <Dropdown overlay={createMenu(dishes.types.byId[typesId].id, 'type')}>
//                       <span
//                         style={{ marginLeft: '30px' }}
//                         className="ant-dropdown-link"
//                       >
//                         <Icon style={{ fontSize: '16px' }} type="edit" />
//                       </span>
//                     </Dropdown>
//                   </span>
//                 }
//               >
//                 {dishes.types.byId[typesId].subTypes.length === 0
//                   ? dishes.types.byId[typesId].dishes.map(dishId => (
//                     <Menu.Item key={dishId}>
//                       {dishes.dishes.byId[dishId].name}
//                     </Menu.Item>
//                   ))
//                   : dishes.types.byId[typesId].subTypes.map(subTypeId => (
//                     <SubMenu
//                       key={subTypeId}
//                       title={
//                         <span>
//                           {dishes.subTypes.byId[subTypeId].name}
//                           <Dropdown overlay={createMenu(dishes.subTypes.byId[subTypeId].id, 'subtype')}>
//                             <span
//                               style={{ marginLeft: '30px' }}
//                               className="ant-dropdown-link"
//                             >
//                               <Icon style={{ fontSize: '16px' }} type="edit" />
//                             </span>
//                           </Dropdown>
//                         </span>
//                       }
//                     >
//                       {dishes.subTypes.byId[subTypeId].dishes.map(dishId => (
//                         <Menu.Item key={dishId}>
//                           {dishes.dishes.byId[dishId].name}
//                         </Menu.Item>
//                       ))}
//                     </SubMenu>
//                   ))}
//               </SubMenu>
//             ))}
//           </Menu>
//         ) : (
//           <div>List of dish is empty.</div>
//         )}
//         <div>
//           <Modal
//             title="Type options"
//             footer={null}
//             visible={visibleModal}
//             onOk={changeVisibleModal}
//             onCancel={changeVisibleModal}
//           >
//             <WrappedNormalLoginForm/>
//           </Modal>
//         </div>
//       </Sider>
//     )
//   }
// }
//
// DishesList.propTypes = {
//   dishes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//   setCurrentDish: PropTypes.func,
//   changeVisibleModal: PropTypes.func,
//   visibleModal: PropTypes.bool,
//
// };
//
// export default DishesList;
