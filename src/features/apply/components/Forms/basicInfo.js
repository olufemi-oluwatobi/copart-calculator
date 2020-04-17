import React, { useState } from "react";
import FormFooter from "../formFooter";
import moment from "moment";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Form, Input, DatePicker, Select } from "antd";
import { Formik } from "formik";
import { basicFormValidationSchema } from "./validationSchemas";
import { FormWrapperStyle } from "../../style";

const { Option } = Select;

const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

const InfoForms = (props) => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    isLoading,
    displayPreviousForm,
  } = props;

  const handleSelectChange = (value, node) => {
    const {
      props: { name },
    } = node;
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const handleMultipleSelect = (value, node, index) => {
    const {
      props: { name },
    } = node;

    const valueArray = values[name].split(",").filter((val) => val.length > 0);
    if (valueArray[index]) {
      valueArray[index] = value;
    } else {
      valueArray.push(value);
    }
    const newValue = valueArray.join(",");
    handleChange({ target: { value: newValue, name } });
    setFieldTouched(name, true, false);
  };
  const onDataPick = (_, value, name) => {
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const handleInputChange = (e) => {
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  };
  return (
    <StyleRoot>
      <FormWrapperStyle style={styles.bounce}>
        <Form layout="vertical">
          <Form.Item
            label="Title/salutation"
            validateStatus={touched.Title && errors.Title && "error"}
            help={touched.Title && errors && errors.Title}
          >
            <Select
              placeholder="select your title"
              value={values.Title}
              onChange={handleSelectChange}
            >
              {["Mrs", "Mr", "Ms", "Prof", "Sir", "Dr"].map((title) => (
                <Option name="Title" value={title}>
                  {title}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="First name"
            validateStatus={touched.FirstName && errors.FirstName && "error"}
            help={touched.FirstName && errors && errors.FirstName}
          >
            <Input
              onChange={handleInputChange}
              name="FirstName"
              value={values.FirstName}
              placeholder="enter your first name"
            />
          </Form.Item>
          <Form.Item
            label="Last name"
            validateStatus={touched.LastName && errors.LastName && "error"}
            help={touched.LastName && errors && errors.LastName}
          >
            <Input
              onChange={handleInputChange}
              name="LastName"
              value={values.LastName}
              placeholder="enter your last name"
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item
              validateStatus={touched.Phone && errors.Phone && "error"}
              help={touched.Phone && errors && errors.Phone}
              label="Phone Number"
              className="half_view_form"
            >
              <Input
                onChange={handleInputChange}
                name="Phone"
                value={values.Phone}
                placeholder="Enter your phone number"
              />
            </Form.Item>
            <span
              style={{
                display: "inline-block",
                width: "24px",
                textAlign: "center",
              }}
            />
            <Form.Item label="Email" className="half_view_form">
              <Input
                onChange={handleInputChange}
                name="Email"
                value={values.Email}
                placeholder="Enter your email address"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="Postal Address"
            validateStatus={
              touched.PostalAddress && errors.PostalAddress && "error"
            }
            help={touched.PostalAddress && errors && errors.PostalAddress}
          >
            <Input
              onChange={handleInputChange}
              name="PostalAddress"
              value={values.PostalAddress}
              placeholder="Enter your postal address"
            />
          </Form.Item>
          <Form.Item
            label="Current gross monthly salary range (in KES)"
            validateStatus={
              touched.CurrentTakeHome && errors.CurrentTakeHome && "error"
            }
            help={touched.CurrentTakeHome && errors && errors.CurrentTakeHome}
          >
            <Select
              placeholder="select your current salary"
              value={values.CurrentTakeHome}
              onChange={handleSelectChange}
            >
              {[
                "below 500,000",
                "500,000 - 699,999",
                "600,000 - 799,999",
                "800,000 - 899,999",
                "900,000 - 1,999,999",
                "2,000,000 - 3,000,000",
                "Above 3,000,000 ",
              ].map((CurrentTakeHome) => (
                <Option name="CurrentTakeHome" value={CurrentTakeHome}>
                  {CurrentTakeHome}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
        <FormFooter
          isLoading={isLoading}
          previousButtonAction={displayPreviousForm}
          action={handleSubmit}
          width="100%"
          actionText="Save and Continue"
        />
      </FormWrapperStyle>
    </StyleRoot>
  );
};

const InfoFormView = ({
  initialValues,
  onSubmit,
  displayPreviousForm,
  isLoading,
}) => {
  return (
    <StyleRoot>
      <React.Fragment>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={basicFormValidationSchema}
          onSubmit={onSubmit}
          displayPreviousForm={displayPreviousForm}
        >
          {(props) => {
            return (
              <InfoForms
                {...props}
                isLoading={isLoading}
                displayPreviousForm={displayPreviousForm}
              />
            );
          }}
        </Formik>
      </React.Fragment>
    </StyleRoot>
  );
};
export default InfoFormView;
