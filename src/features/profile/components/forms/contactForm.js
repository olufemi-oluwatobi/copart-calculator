import React, { useEffect, useState } from "react";
import { Object, string } from "yup";
import FormFooter from "../formFooter";
import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  Select,
  Cascader,
  InputNumber
} from "antd";
import { FormWrapperStyle } from "../../style";
const { Option } = Select;

const labelCol = {
  xs: { span: 24 },
  sm: { span: 5 }
};
const wrapperCol = {
  xs: { span: 24 },
  sm: { span: 12 }
};
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 }
};

const ContactFormView = props => {
  console.log(props);
  const {
    errors,
    values,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    displayPreviousForm
  } = props;

  const handleSelectChange = (value, node) => {
    const {
      props: { name }
    } = node;
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const onDataPick = (_, value, name) => {
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const handleInputChange = e => {
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  };

  return (
    <FormWrapperStyle>
      <Form layout="vertical">
        <Form.Item
          label="Email"
          validateStatus={touched.Email && errors.Email && "error"}
          help={touched.Email && errors && errors.Email}
        >
          <Input
            onChange={handleInputChange}
            name="Email"
            value={values.Email}
            placeholder="enter your email"
          />
        </Form.Item>

        <Form.Item
          label="Contact Number*"
          validateStatus={
            touched.ContactNumber && errors.ContactNumber && "error"
          }
          help={touched.ContactNumber && errors && errors.ContactNumber}
        >
          <Input
            onChange={handleInputChange}
            value={values.ContactNumber}
            name="ContactNumber"
            placeholder="enter your phone number"
          />
        </Form.Item>

        <Form.Item
          label="Location*"
          validateStatus={touched.Address && errors.Address && "error"}
          help={touched.Address && errors && errors.Address}
        >
          <Input
            value={values.Address}
            onChange={handleInputChange}
            name="Address"
            placeholder="Enter your address"
          />
        </Form.Item>
        <FormFooter
          isLoading={props.isLoading}
          previousButtonAction={displayPreviousForm}
          hasPreviousButton
          action={handleSubmit}
          width="100%"
          actionText="Next"
        />
      </Form>
    </FormWrapperStyle>
  );
};

export default ContactFormView;
