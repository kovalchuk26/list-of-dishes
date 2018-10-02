// import React, { Component } from 'react';
// import { Form, Icon, Input, Button, Select, InputNumber } from 'antd';
//
// const FormItem = Form.Item;
// const Option = Select.Option;
//
// class NormalLoginForm extends Component {
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   }
//
//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const formItemLayout = {
//       labelCol: { span: 6 },
//       wrapperCol: { span: 14 },
//     };
//     return (
//       <Form onSubmit={this.handleSubmit} className="login-form">
//         <FormItem {...formItemLayout} label="Name">
//           {getFieldDecorator('name', {
//             rules: [{ required: true, message: 'Please input name!' }],
//           })(
//             <Input
//               prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               placeholder="Edit name"
//             />,
//           )}
//         </FormItem>
//
//         <FormItem {...formItemLayout} label="Delete Subtype" hasFeedback>
//           {getFieldDecorator('selectSubtype', {
//             rules: [{ required: true, message: 'Please select your country!' }],
//           })(
//             <Select placeholder="Please select a country">
//               <Option value="china">China</Option>
//               <Option value="use">U.S.A</Option>
//             </Select>,
//           )}
//         </FormItem>
//
//         <FormItem {...formItemLayout} label="Delete Dish" hasFeedback>
//           {getFieldDecorator('selectDish', {
//             rules: [{ required: true, message: 'Please select your country!' }],
//           })(
//             <Select placeholder="Please select a country">
//               <Option value="china">China</Option>
//               <Option value="use">U.S.A</Option>
//             </Select>,
//           )}
//         </FormItem>
//
//         <FormItem {...formItemLayout} label="Select fillers">
//           {getFieldDecorator('select-multiple', {
//             rules: [
//               {
//                 required: true,
//                 message: 'Please select your favourite colors!',
//                 type: 'array',
//               },
//             ],
//           })(
//             <Select
//               mode="multiple"
//               placeholder="Please select favourite colors"
//             >
//               <Option value="red">Red</Option>
//               <Option value="green">Green</Option>
//               <Option value="blue">Blue</Option>
//             </Select>,
//           )}
//         </FormItem>
//
//         <FormItem {...formItemLayout} label="Price">
//           {getFieldDecorator('input-number', { initialValue: 3 })(
//             <InputNumber min={1} max={10} />,
//           )}
//           <span className="ant-form-text"> machines</span>
//         </FormItem>
//
//         <FormItem wrapperCol={{ span: 300, offset: 6 }}>
//           <Button
//             type="primary"
//             htmlType="submit"
//             disabled={hasErrors(getFieldsError())}
//           >
//             Ok
//           </Button>
//         </FormItem>
//       </Form>
//     );
//   }
// }
//
// export const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
