import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Select, InputNumber } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class NormalLoginForm extends Component {
  componentWillMount() {
    this.getFieldDecorator = this.props.form.getFieldDecorator;
    this.getFieldsError = this.props.form.getFieldsError;
    this.getFieldError = this.props.form.getFieldError;
    this.isFieldTouched = this.props.form.isFieldTouched;
    this.formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.action !== this.props.action || nextProps.type !== this.props.type) {
      this.props.form.resetFields();
      this.props.form.validateFields();
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  hasErrors(fieldsError) {
    console.log(this.props.form.getFieldsError());
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  createNameField() {
    const nameError = this.isFieldTouched('name') && this.getFieldError('name');

    console.log('Is touched:', this.isFieldTouched('name'));

    return (<FormItem
      {...this.formItemLayout} label="Name"
      validateStatus={nameError ? 'error' : ''}
      help={nameError || ''}>
      {this.getFieldDecorator('name', {
        rules: [{ required: true, message: 'Please input name!' }],
      })(
        <Input
          prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Input name"
        />
      )}
    </FormItem>);
  }

  createSubtypeSelect() {
    const selectSubtypeError = this.isFieldTouched('selectSubtype') && this.getFieldError('selectSubtype');

    return this.props.action === 'edit' && this.props.type === 'type' ? (<FormItem
      {...this.formItemLayout} label="Delete Subtype" hasFeedback
      validateStatus={selectSubtypeError ? 'error' : ''}
      help={selectSubtypeError || ''}>
      {this.getFieldDecorator('selectSubtype', {
        rules: [{ required: true, message: 'Please select a subtype for delete!' }],
      })(
        <Select placeholder="Please select a subtype for delete">
          <Option value="china">Обычная</Option>
          <Option value="use">Римская</Option>
        </Select>,
      )}
    </FormItem>) : null;
  }

  createDishSelect() {
    const selectDishError = this.isFieldTouched('selectDish') && this.getFieldError('selectDish');

    return this.props.action === 'edit' && this.props.type === 'subtype' ? (<FormItem
      {...this.formItemLayout} label="Delete Dish" hasFeedback
      validateStatus={selectDishError ? 'error' : ''}
      help={selectDishError || ''}>
      {this.getFieldDecorator('selectDish', {
        rules: [{ required: true, message: 'Please select a dish for delete!' }],
      })(
        <Select placeholder="Please select a dish for delete">
          <Option value="china">Ниндзя</Option>
          <Option value="use">Неаполь</Option>
        </Select>,
      )}
    </FormItem>) : null;
  }

  createFillersSelect() {
    const fillersError = this.isFieldTouched('fillers') && this.getFieldError('fillers');

    return this.props.action === 'add' && this.props.type === 'subtype' ? (<FormItem
      {...this.formItemLayout} label="Select fillers"
      validateStatus={fillersError ? 'error' : ''}
      help={fillersError || ''}>
      {this.getFieldDecorator('fillers', {
        rules: [
          {
            required: true,
            message: 'Please select fillers!',
            type: 'array',
          },
        ],
      })(
        <Select
          mode="multiple"
          placeholder="Please select fillers"
        >
          <Option value="red">Помидоры</Option>
          <Option value="green">Сыр</Option>
          <Option value="blue">Рыба</Option>
        </Select>,
      )}
    </FormItem>) : null;
  }

  createPriceField() {
    const priceError = this.isFieldTouched('price') && this.getFieldError('price');

    return this.props.type === 'subtype' && this.props.action === 'add' ? (<FormItem
      {...this.formItemLayout} label="Price"
      validateStatus={priceError ? 'error' : ''}
      help={priceError || ''}>
      {this.getFieldDecorator('price', { initialValue: 250 })(
        <InputNumber min={10} max={1000} />,
      )}
      <span className="ant-form-text"> rubles</span>
    </FormItem>) : null;
  }

  // reset validation errors after change form

  render() {
    const { getFieldsError } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
        {this.createNameField()}
        {this.createSubtypeSelect()}
        {this.createDishSelect()}
        {this.createFillersSelect()}
        {this.createPriceField()}

        <FormItem wrapperCol={{ span: 300, offset: 6 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={this.hasErrors(getFieldsError())}
          >
            Ok
          </Button>
        </FormItem>
      </Form>
    );
  }
}

NormalLoginForm.propTypes = {
  form: PropTypes.object,
};

export const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
